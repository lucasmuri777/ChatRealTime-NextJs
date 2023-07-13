import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBI0sI1lWUQiji5ZuDbJDTiW9JmXfZ4F-g",
  authDomain: "chatonline-dad9e.firebaseapp.com",
  projectId: "chatonline-dad9e",
  storageBucket: "chatonline-dad9e.appspot.com",
  messagingSenderId: "714020223612",
  appId: "1:714020223612:web:08c51e8e2569decafda7f9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export {db}