import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPhH7vvistOHw9dT_rMJj2Dmkkf5p7Gs0",
  authDomain: "project-19167.firebaseapp.com",
  projectId: "project-19167",
  storageBucket: "project-19167.appspot.com",
  messagingSenderId: "208133305177",
  appId: "1:208133305177:web:eb1a06a7b985bb82d5d248",
  measurementId: "G-JELMDFRBR0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

export default app;
