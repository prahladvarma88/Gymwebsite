import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_dBJZWs9K6SEhYRA3vvI6LdoUViRtC5w",

  authDomain: "gym2-90b70.firebaseapp.com",

  projectId: "gym2-90b70",

  storageBucket: "gym2-90b70.appspot.com",

  messagingSenderId: "144882365443",

  appId: "1:144882365443:web:49aafdf496a0a4a9c48a36"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

