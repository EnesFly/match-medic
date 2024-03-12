import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// config
const firebaseConfig = {
  apiKey: "AIzaSyCHmmhDWtLLUasuddqk3bsVcsvYCp66woE",
  authDomain: "match-medic-p0.firebaseapp.com",
  projectId: "match-medic-p0",
  storageBucket: "match-medic-p0.appspot.com",
  messagingSenderId: "793569075086",
  appId: "1:793569075086:web:86059d65574dbaa3214edf",
  measurementId: "G-4Z48RHHR20"
};

// Firebase <3
const app = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app);

// Google Auth
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

// Firestore
const db = getFirestore(app);
export { db };