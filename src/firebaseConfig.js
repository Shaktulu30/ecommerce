import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIOETGgBKsey-27BOf0Kokj2TyCS5LDRM",
  authDomain: "ecommerce-react-cd754.firebaseapp.com",
  projectId: "ecommerce-react-cd754",
  storageBucket: "ecommerce-react-cd754.firebasestorage.app",
  messagingSenderId: "671880928773",
  appId: "1:671880928773:web:6153f0b661e906c3d1866c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);