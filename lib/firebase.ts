// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVL8GuiV4mJuKv5wuWuwH3Vc1aucGg5nc",
  authDomain: "web-kaizen-ad8d0.firebaseapp.com",
  projectId: "web-kaizen-ad8d0",
  storageBucket: "web-kaizen-ad8d0.appspot.com",
  messagingSenderId: "853477873110",
  appId: "1:853477873110:web:2b8140b5b087bc8caa8077",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
