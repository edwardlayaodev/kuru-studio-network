import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDknUDL6WwsAGFyiBru36J8hKWc6yD6B28",
  authDomain: "kuru-studio-social-firebase-dv.firebaseapp.com",
  databaseURL: "https://kuru-studio-social-firebase-dv.firebaseio.com",
  projectId: "kuru-studio-social-firebase-dv",
  storageBucket: "kuru-studio-social-firebase-dv.appspot.com",
  messagingSenderId: "1021677199092",
  appId: "1:1021677199092:web:db5bf81fe426816a5808a1",
  measurementId: "G-KNH9M8BJCC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
