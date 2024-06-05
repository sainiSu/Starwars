// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA762eaOwnRYjj7DzjM1-3bWq9iFqcZ8Ok",
  authDomain: "login1-f696a.firebaseapp.com",
  projectId: "login1-f696a",
  storageBucket: "login1-f696a.appspot.com",
  messagingSenderId: "1049699489474",
  appId: "1:1049699489474:web:e420002ff4746898c34d5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
