importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAnj42fEg9MKSrPYknsqbLEWcoXI3tbDC8",
  authDomain: "esp32-firedetection.firebaseapp.com",
  projectId: "esp32-firedetection",
  storageBucket: "esp32-firedetection.appspot.com",
  messagingSenderId: "223272493437",
  appId: "1:223272493437:web:8470b541af5b16b1c0ac14",
})

firebase.messaging();
