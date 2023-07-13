// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKuIgEpTPOOZUOZwsE21LsZg7KwNiFbqg",
  authDomain: "drg-categorizer-f1db1.firebaseapp.com",
  projectId: "drg-categorizer-f1db1",
  storageBucket: "drg-categorizer-f1db1.appspot.com",
  messagingSenderId: "1071427239125",
  appId: "1:1071427239125:web:bc6c3842d284c4aef2b65c",
  measurementId: "G-THPCX5DSD8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);