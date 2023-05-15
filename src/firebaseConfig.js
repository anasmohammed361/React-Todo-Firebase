// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUk3T2sjY0ZP6GmJBOQ7pDkwDogL37C3s",
  authDomain: "todo-with-react-fc5ef.firebaseapp.com",
  projectId: "todo-with-react-fc5ef",
  storageBucket: "todo-with-react-fc5ef.appspot.com",
  messagingSenderId: "478443663479",
  appId: "1:478443663479:web:61cebb100a6ed8ead05672",
  measurementId: "G-JGPFL3V353"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);