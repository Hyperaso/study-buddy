// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyBRsUv_dJVjchdoqUodq95tQ8gUEJyUH_c",
  authDomain: "study-buddy-1ca03.firebaseapp.com",
  projectId: "study-buddy-1ca03",
  messagingSenderId: "441262046694",
  appId: "1:441262046694:web:7aede45840e6a636a5aa27",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// When the web app is in the background or closed
messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);

  const notificationTitle = payload.notification?.title || "Study Buddy";
  const notificationOptions = {
    body: payload.notification?.body || "You have a new reminder!",
    icon: "icon.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
