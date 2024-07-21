// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBlmuLQPJFycxKa5Vz3sC7zJ0bNDG-yVYY",
  authDomain: "twitter-clone-8767f.firebaseapp.com",
  projectId: "twitter-clone-8767f",
  storageBucket: "twitter-clone-8767f.appspot.com",
  messagingSenderId: "587478691804",
  appId: "1:587478691804:web:5ec7626cd6cb2a050ea919",
  measurementId: "G-X82HTFYNVB"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);