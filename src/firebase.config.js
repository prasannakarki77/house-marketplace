// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMXuvZyxJsJ9oJ1CJ04vzoSGX-MYsGotk",
  authDomain: "house-marketplace-app-c6279.firebaseapp.com",
  projectId: "house-marketplace-app-c6279",
  storageBucket: "house-marketplace-app-c6279.appspot.com",
  messagingSenderId: "994814913162",
  appId: "1:994814913162:web:08133308221b3039a61b73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
