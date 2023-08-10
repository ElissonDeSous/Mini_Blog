import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVGiPx7SBUlZ-oTAyZ6wjfnNMcy9P4M8Q",
  authDomain: "mini-blog-a48be.firebaseapp.com",
  projectId: "mini-blog-a48be",
  storageBucket: "mini-blog-a48be.appspot.com",
  messagingSenderId: "211043557184",
  appId: "1:211043557184:web:e57f1c55bedcf357c864a5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };