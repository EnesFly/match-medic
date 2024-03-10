import React, { createContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

export const AuthContext = createContext(false); // Initial value
// Sign up
export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Sign in
export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Sign out
export const signOutUser = () => {
  return signOut(auth);
};

// listener for auth
export const monitorAuthState = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    console.log("Auth state changed:", !!user);
    callback(!!user);
  });
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log("Setting up auth state listener");
    const unsubscribe = monitorAuthState((isAuthenticated) => {
      console.log("User authentication status:", isAuthenticated);
      setIsAuthenticated(isAuthenticated);
    });

    return () => {
      console.log("Cleaning up auth state listener");
      unsubscribe();
    };
  }, []);

  const value = {
    signIn,
    signUp,
    signOutUser,
    monitorAuthState,

  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};