import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCnQKfKWVlhBxBsgPb9gUgJd5JVd3j2-90",
  authDomain: "uninet-admin.firebaseapp.com",
  projectId: "uninet-admin",
  storageBucket: "uninet-admin.appspot.com",
  messagingSenderId: "638732718307",
  appId: "1:638732718307:web:5d11c88542db83154675d6"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
