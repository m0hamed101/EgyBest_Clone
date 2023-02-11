import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCPnWb-oXXt4PP-vrUyNIf6TRmZ2hRxgRA",
  authDomain: "egybest-clone.firebaseapp.com",
  databaseURL: "https://egybest-clone-default-rtdb.firebaseio.com",
  projectId: "egybest-clone",
  storageBucket: "egybest-clone.appspot.com",
  messagingSenderId: "471135589523",
  appId: "1:471135589523:web:b3d1bbadd77ecd195ce966",
  measurementId: "G-NXNZ72HJPR"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)