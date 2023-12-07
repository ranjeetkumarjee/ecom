// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDamhMfgeygFiMesoODUXD9YVzvhxqNOA",
  authDomain: "shopmall-b5559.firebaseapp.com",
  projectId: "shopmall-b5559",
  storageBucket: "shopmall-b5559.appspot.com",
  messagingSenderId: "770701929361",
  appId: "1:770701929361:web:9dd54db58dfb32485d8830"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);




