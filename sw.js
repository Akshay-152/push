// firebase-messaging-sw.js
// Place this at the root: https://yourdomain.com/firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// Use the same firebaseConfig used in index.html
const firebaseConfig = {
  apiKey: "AIzaSyAd-SQmyTES3_C_WIjpN557aNvI_vwDmWM",
  authDomain: "push-1c3e6.firebaseapp.com",
  projectId: "push-1c3e6",
  storageBucket: "push-1c3e6.firebasestorage.app",
  messagingSenderId: "332269974589",
  appId: "1:332269974589:web:413a4eaa0f0cda2e666654",
  measurementId: "G-XHE5WVZ8XV"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const title = payload.notification?.title || 'Background Message';
  const options = { body: payload.notification?.body || '', icon: '/favicon.ico' };
  self.registration.showNotification(title, options);
});
