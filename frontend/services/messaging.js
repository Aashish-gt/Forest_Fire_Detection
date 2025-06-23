import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAnj42fEg9MKSrPYknsqbLEWcoXI3tbDC8",
    authDomain: "esp32-firedetection.firebaseapp.com",
    databaseURL: "https://esp32-firedetection-default-rtdb.firebaseio.com",
    projectId: "esp32-firedetection",
    storageBucket: "esp32-firedetection.firebasestorage.app",
    messagingSenderId: "223272493437",
    appId: "1:223272493437:web:8470b541af5b16b1c0ac14",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

console.log("messaging.js loaded");

// Listen for messages from the service worker (background messages)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', (event) => {
        console.log("Received message from service worker:", event.data);
        const { title, body } = event.data?.notification || {};
        if (Notification.permission === "granted") {
            new Notification(title || "Fire Alert", {
                body: body || "Fire detected!",
                icon: "/icon.png"
            });
        }
    });
}

onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
    const { title, body } = payload.notification || {};
    // Show a notification using the browser Notification API
    if (Notification.permission === "granted") {
        console.log("Notification permission granted");
        new Notification(title || "Fire Alert", {
            body: body || "Fire detected!",
            icon: "/icon.png" // Optional
        });
    }
    else{
        console.log("Notification permission not granted");
    }
});

export const requestNotificationPermission = async () => {
    console.log("Requesting notification permission...");

    const permission = await Notification.requestPermission();

    if (permission !== "granted") {
        console.warn("Notification permission denied");
        return null;
    }

    try {
        const registration = await navigator.serviceWorker.register("/firebase-messaging-sw.js");
        console.log("Service worker registered:", registration);

        const fcmToken = await getToken(messaging, {
            vapidKey: "BKJFu867g3MA4O0WEqZMizCjdFNByM2QvpdplxbF0ISowlkD6AO4Ci9AyobiGQ85yvk3ZJx_lMFyFRp26Mk6jAI", // from Firebase console
            serviceWorkerRegistration: registration
        });

        console.log("FCM Token:", fcmToken);
        return fcmToken;
    } catch (error) {
        console.error("FCM registration error (full):", error);
        console.error("Error message:", error?.message || "Unknown error");
        return null;
    }
};
