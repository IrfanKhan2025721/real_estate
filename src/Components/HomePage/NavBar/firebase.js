// src/Components/HomePage/NavBar/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPbKu-F8x5fO4y1Qrh6WeDETaj8XoCcuM",
  authDomain: "real-esate-8dc3e.firebaseapp.com",
  projectId: "real-esate-8dc3e",
  storageBucket: "real-esate-8dc3e.appspot.com",
  messagingSenderId: "635940417590",
  appId: "1:635940417590:web:be89b21aedd6be76112897",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exports
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
