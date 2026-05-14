import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


// 👇 yaha apna firebaseConfig paste karo

const firebaseConfig = {
  apiKey: "AIzaSyDt51J5m6fUWm4RMETIBf8uhpb4l5TkrTA",
  authDomain: "archaspect-a8e09.firebaseapp.com",
  projectId: "archaspect-a8e09",
  storageBucket: "archaspect-a8e09.firebasestorage.app",
  messagingSenderId: "644830965082",
  appId: "1:644830965082:web:a6b43ccfbfa423f16c5763",
  measurementId: "G-4YPT8SV7ZL"
};


const app = initializeApp(firebaseConfig);

// 🔥 ye export karna zaroori hai
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);