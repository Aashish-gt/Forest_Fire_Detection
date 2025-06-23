import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnj42fEg9MKSrPYknsqbLEWcoXI3tbDC8",
  authDomain: "esp32-firedetection.firebaseapp.com",
  databaseURL: "https://esp32-firedetection-default-rtdb.firebaseio.com",
  projectId: "esp32-firedetection",
  storageBucket: "esp32-firedetection.firebasestorage.app",
  messagingSenderId: "223272493437",
  appId: "1:223272493437:web:8470b541af5b16b1c0ac14"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
