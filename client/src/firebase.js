
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6be2c.firebaseapp.com",
  projectId: "mern-estate-6be2c",
  storageBucket: "mern-estate-6be2c.appspot.com",
  messagingSenderId: "682794413067",
  appId: "1:682794413067:web:9672c74b85dc7804786b0e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);