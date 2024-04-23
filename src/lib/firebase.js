import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "nenochat-4ffc8.firebaseapp.com",
  projectId: "nenochat-4ffc8",
  storageBucket: "nenochat-4ffc8.appspot.com",
  messagingSenderId: "138322122570",
  appId: "1:138322122570:web:cd0b0f8ff51c23d33b13b3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
