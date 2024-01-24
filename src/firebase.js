import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCDBME1L0b9QtOwpAXXwfJQo54p7LFmoVo",
  authDomain: "k-website-7a295.firebaseapp.com",
  projectId: "k-website-7a295",
  storageBucket: "k-website-7a295.appspot.com",
  messagingSenderId: "413471897528",
  appId: "1:413471897528:web:1eb7c7d34dd0e48131014d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


