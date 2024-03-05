import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRrlLOFfTfczg5IO6FvVb5Sq65Skxsuvw",
  authDomain: "chat-aa67c.firebaseapp.com",
  projectId: "chat-aa67c",
  storageBucket: "chat-aa67c.appspot.com",
  messagingSenderId: "63709631504",
  appId: "1:63709631504:web:a46785aeabd7e378412695",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
