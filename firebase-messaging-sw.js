// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBRsUv_dJVjchdoqUodq95tQ8gUEJyUH_c",
  authDomain: "study-buddy-1ca03.firebaseapp.com",
  projectId: "study-buddy-1ca03",
  messagingSenderId: "441262046694",
  appId: "1:441262046694:web:7aede45840e6a636a5aa27"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
    const notificationTitle = payload.notification.title || "Study Buddy";
    const notificationOptions = {
        body: payload.notification.body || "You have a task reminder!",
        icon: "icon.png",
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

// Optional: handle notification click
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    // Open your web app when notification is clicked
    event.waitUntil(
        clients.openWindow('./index.html')
    );
});
