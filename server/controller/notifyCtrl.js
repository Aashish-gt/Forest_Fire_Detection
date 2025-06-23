const { db } = require('../config/firebase');
const admin = require('firebase-admin');

const saveToken = async (req, res) => {
  const email = req.user.email;
  const { token } = req.body;

  await db.collection('admin_tokens').doc(email).set({ token, updatedAt: new Date().toISOString() });
  res.json({ success: true, message: 'Token saved' });
};


const sendNotification = async (req, res) => {
  const { email, title, body } = req.body;
  const doc = await db.collection('admin_tokens').doc(email).get();
  if (!doc.exists) return res.status(404).json({ message: 'Token not found' });

  await admin.messaging().send({
    notification: { title, body },
    token: doc.data().token
  });

  res.json({ success: true, message: 'Notification sent' });
};

module.exports = {saveToken, sendNotification}
