import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAnj42fEg9MKSrPYknsqbLEWcoXI3tbDC8",
  authDomain: "esp32-firedetection.firebaseapp.com",
  databaseURL: "https://esp32-firedetection-default-rtdb.firebaseio.com",
  projectId: "esp32-firedetection",
storageBucket: "esp32-firedetection.appspot.com",

  messagingSenderId: "223272493437",
  appId: "1:223272493437:web:8470b541af5b16b1c0ac14"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const messaging = getMessaging(app);

export const onMessageListener = () => {
  const unsubscribe = onMessage(messaging, payload => console.log('message payload: ', payload));
  return unsubscribe;
}

export const getFCMToken = async () => {
  return await getToken(messaging, { vapidKey: "BKJFu867g3MA4O0WEqZMizCjdFNByM2QvpdplxbF0ISowlkD6AO4Ci9AyobiGQ85yvk3ZJx_lMFyFRp26Mk6jAI" });
}

export function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      navigator.serviceWorker.register("/firebase-messaging-sw.js")
        .then(worker => console.log(worker))
        .catch(err => console.error('service worker error: ', err));
    } else {
      console.warn('Permission denied')
    }
  }).catch(err => console.error(err));
};