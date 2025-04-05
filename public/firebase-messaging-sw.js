// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyCTPcwSyaXqiRTqQcVlswufhzx6Dcho3dQ",
    authDomain: "lms-aicoju.firebaseapp.com",
    projectId: "lms-aicoju",
    storageBucket: "lms-aicoju.appspot.com",
    messagingSenderId: "268417407532",
    appId: "1:268417407532:web:aa64d05dd6837d217a4f89",
    measurementId: "G-NCG04P3BTE"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    // Customize notification here
    const notificationOptions = {
        body: "",
        icon: "/public/frontend/infixlmstheme/img/bank/hdbank.png",
    };
    
    const notificationTitle = payload.data.title;

    self.registration.showNotification(notificationTitle, notificationOptions);
});
