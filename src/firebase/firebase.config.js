
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7HGX0hcpbbuB4T2_4sR3fMbT4KE9lnUI",
  authDomain: "simple-firebase-8fd81.firebaseapp.com",
  projectId: "simple-firebase-8fd81",
  storageBucket: "simple-firebase-8fd81.appspot.com",
  messagingSenderId: "158925682745",
  appId: "1:158925682745:web:5a0687be845736693035e8"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth