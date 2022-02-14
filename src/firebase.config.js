import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByWbk4ysbAusfKCQA9e2icYuVWb0WFzgQ",
  authDomain: "house-marketplace-app-bf0aa.firebaseapp.com",
  projectId: "house-marketplace-app-bf0aa",
  storageBucket: "house-marketplace-app-bf0aa.appspot.com",
  messagingSenderId: "111592365229",
  appId: "1:111592365229:web:cfc1f23cfb0edc39b1fa24"
};

// Initialize Firebase - passing api key and such into initialize app
initializeApp(firebaseConfig);
export const db = getFirestore();