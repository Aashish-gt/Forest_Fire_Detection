// public/firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyAnj42fEg9MKSrPYknsqbLEWcoXI3tbDC8",
    authDomain: "esp32-firedetection.firebaseapp.com",
    projectId: "esp32-firedetection",
    storageBucket: "esp32-firedetection.firebasestorage.app",
    messagingSenderId: "223272493437",
    appId: "1:223272493437:web:8470b541af5b16b1c0ac14",
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function (payload) {
    console.log("[firebase-messaging-sw.js] Received background message ", payload);
    const notificationTitle = payload.notification.title || "Fire Alert";
    const notificationOptions = {
        body: payload.notification.body || "Fire detected!",
        icon: "/icon.png",
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
