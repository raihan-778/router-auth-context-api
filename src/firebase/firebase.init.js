// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvp4cqbPVqRcdStb9wZMrxWB9b9wZgVfg",
  authDomain: "router-auth-context-api.firebaseapp.com",
  projectId: "router-auth-context-api",
  storageBucket: "router-auth-context-api.firebasestorage.app",
  messagingSenderId: "880869875305",
  appId: "1:880869875305:web:2286e322ccc29d9b7b8cf8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
