// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw4hpaltQC5CGBxN0X0f3OUISJkpJcaFg",
  authDomain: "shopyshop-ecc2e.firebaseapp.com",
  projectId: "shopyshop-ecc2e",
  storageBucket: "shopyshop-ecc2e.appspot.com",
  messagingSenderId: "300940564304",
  appId: "1:300940564304:web:a87cc4e840154489647e55"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);




