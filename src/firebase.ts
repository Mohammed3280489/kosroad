
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAH6N1ZqRtRkGSMUcMXndYwdpBUaaOf1b0",
  authDomain: "uploadimagetest328.firebaseapp.com",
  projectId: "uploadimagetest328",
  storageBucket: "uploadimagetest328.appspot.com",
  messagingSenderId: "20918387643",
  appId: "1:20918387643:web:9e69956e622ae059047a9e",
  measurementId: "G-5996ER739N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storge = getStorage(app);