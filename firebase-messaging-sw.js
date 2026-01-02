importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

firebase.initializeApp({
 apiKey:"PUT_YOUR_KEY",
 authDomain:"PUT_YOUR.firebaseapp.com",
 projectId:"PUT_YOUR",
 messagingSenderId:"PUT_YOUR",
 appId:"PUT_YOUR"
});

const messaging=firebase.messaging();
messaging.onBackgroundMessage(payload=>{
 self.registration.showNotification("Study Buddy",{
  body:payload.notification.body,
  icon:"icon.png"
 });
});
