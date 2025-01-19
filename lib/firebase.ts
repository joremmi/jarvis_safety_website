// lib/firebase.ts  

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAYTwMG35r5AqUO_FMZr9pSBDMhiAqBeW8",
    authDomain: "jarvis-52c38.firebaseapp.com",
    projectId: "jarvis-52c38",
    storageBucket: "jarvis-52c38.firebasestorage.app",
    messagingSenderId: "401544119053",
    appId: "1:401544119053:web:b7a22c2f749b6b61f42644",
    measurementId: "G-4YVQGLQ6JL"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
