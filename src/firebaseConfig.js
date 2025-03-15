import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAHJai1d9GhfBPtHjTuzg_FNUBUdzNm9o",
  authDomain: "backend-adoryan.firebaseapp.com",
  projectId: "backend-adoryan",
  storageBucket: "backend-adoryan.firebasestorage.app",
  messagingSenderId: "522455496929",
  appId: "1:522455496929:web:9aeaa0a29aca4de3021fa0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
