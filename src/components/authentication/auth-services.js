import { auth } from '../../firebase.js';
import { provider, signInWithGoogle } from '../../firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

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

// Google auth
export const googleSignUp = () => {
  return signInWithGoogle();
}

// listener for auth
export const monitorAuthState = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    console.log("Auth state changed:", !!user);
    callback(!!user);
  });
};