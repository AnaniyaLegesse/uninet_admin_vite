import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDUkOQnP5CmNtC2sjIGSCpeyZwYrmjS8vk",
  authDomain: "unilink-e1cd3.firebaseapp.com",
  projectId: "unilink-e1cd3",
  storageBucket: "unilink-e1cd3.appspot.com",
  messagingSenderId: "162037507829",
  appId: "1:162037507829:web:7556cbf6d303a07f2d47bc",
  measurementId: "G-ZTFB5JFHTS"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
export const analytics = getAnalytics(app);





