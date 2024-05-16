// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries\

import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDejxFnr9pcq7JhkMWtFo3vlyLkSRNM414",
  authDomain: "superpot-9ef87.firebaseapp.com",
  databaseURL: "https://superpot-9ef87-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "superpot-9ef87",
  storageBucket: "superpot-9ef87.appspot.com",
  messagingSenderId: "199450781919",
  appId: "1:199450781919:web:93c4002e0667f6cf66e16a",
  measurementId: "G-6KTE3Y2ZVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);