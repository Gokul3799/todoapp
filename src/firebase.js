import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhuZ9IU7CJPfCrJLLVcyRhaChv5p_U-mg",
  authDomain: "todo-app-react-d1a1a.firebaseapp.com",
  projectId: "todo-app-react-d1a1a",
  storageBucket: "todo-app-react-d1a1a.appspot.com",
  messagingSenderId: "719089442850",
  appId: "1:719089442850:web:c1f9a0d201ace3cdbaea7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
