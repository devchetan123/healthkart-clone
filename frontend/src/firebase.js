import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAo-Wct0udC4BWyg7rLW_tVCZDnubbvzZc",
  authDomain: "mobile-auth-development.firebaseapp.com",
  projectId: "mobile-auth-development",
  storageBucket: "mobile-auth-development.appspot.com",
  messagingSenderId: "842477607763",
  appId: "1:842477607763:web:f64d126c4bc85061695fa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;