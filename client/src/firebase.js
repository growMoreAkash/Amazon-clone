// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyABmwGw3ejKclpCsNVYnpRfT59raWtOzNE",
  authDomain: "clone-b7638.firebaseapp.com",
  projectId: "clone-b7638",
  storageBucket: "clone-b7638.appspot.com",
  messagingSenderId: "877725004988",
  appId: "1:877725004988:web:0433635b5cb1b615410cb9",
  measurementId: "G-98VGM065FK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth();

export {auth}