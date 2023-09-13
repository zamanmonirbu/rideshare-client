// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0WiDZK97dMhCV_2ck1exP1Jcd0eG7JY8",
  authDomain: "ride-sharing-dbe19.firebaseapp.com",
  projectId: "ride-sharing-dbe19",
  storageBucket: "ride-sharing-dbe19.appspot.com",
  messagingSenderId: "462890778421",
  appId: "1:462890778421:web:46cbc697048153344f167c"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
