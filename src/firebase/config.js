// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }  from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2NEwrwI9fx0KWULfY8QKECuZ0cIdrU7g",
  authDomain: "react-cursos-8dce7.firebaseapp.com",
  projectId: "react-cursos-8dce7",
  storageBucket: "react-cursos-8dce7.appspot.com",
  messagingSenderId: "1025148663263",
  appId: "1:1025148663263:web:fd9924cafba8227d36806a"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );