import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxMtDPwcoeplXZWePX7Wj0vJ5sH0ZgXWE",
  authDomain: "catino-manga.firebaseapp.com",
  projectId: "catino-manga",
  storageBucket: "catino-manga.appspot.com",
  messagingSenderId: "467267857466",
  appId: "1:467267857466:web:cf7ab2ec90694891de5903"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);