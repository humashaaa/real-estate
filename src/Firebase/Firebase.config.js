// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCvRllTSshDr5VO8YJRl4I7b7lHDqpst8",
  authDomain: "assignment-9-e795a.firebaseapp.com",
  projectId: "assignment-9-e795a",
  storageBucket: "assignment-9-e795a.appspot.com",
  messagingSenderId: "14227988156",
  appId: "1:14227988156:web:7a2e04ec533bd7d4f67ab9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;