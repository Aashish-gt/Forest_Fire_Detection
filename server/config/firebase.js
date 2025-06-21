const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://console.firebase.google.com/project/esp32-firedetection/database"
});

const db = admin.firestore();
const auth = admin.auth();

module.exports = { admin, db, auth };