import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

$(function () {
    setupAjax();
    initFCM();

    function initFCM() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/public/firebase-messaging-sw.js')
            .then((registration) => {
                console.log('Registration successful, scope is ', registration);

                const firebaseConfig = {
                    apiKey: "AIzaSyCTPcwSyaXqiRTqQcVlswufhzx6Dcho3dQ",
                    authDomain: "lms-aicoju.firebaseapp.com",
                    projectId: "lms-aicoju",
                    storageBucket: "lms-aicoju.appspot.com",
                    messagingSenderId: "268417407532",
                    appId: "1:268417407532:web:aa64d05dd6837d217a4f89",
                    measurementId: "G-NCG04P3BTE"
                };
                
                // Initialize Firebase
                const firebaseApp = initializeApp(firebaseConfig);

                // Get registration token. Initially this makes a network call, once retrieved
                // subsequent calls to getToken will return from cache.
                const messaging = getMessaging(firebaseApp);
                const vapidKey = $('.fcm_vapid_key').val();

                if (vapidKey) {
                    getToken(messaging, { vapidKey: vapidKey, serviceWorkerRegistration: registration }).then((currentToken) => {
                        if (currentToken) {
                            // Send the token to your server and update the UI if necessary
                            $.ajax({
                                type: "POST",
                                url: $('.set_firebase_token').val(),
                                data: {
                                    fcm_token_web: currentToken
                                }
                            }).then((data) => {
                                console.log('current token', data);
                            }).catch((err) => {
                                console.log('error', err);
                            });
                        } else {
                            // Show permission request UI
                            console.log('No registration token available. Request permission to generate one.');
                            // ...
                        }
                    }).catch((err) => {
                        console.log('An error occurred while retrieving token. ', err);
                        // ...
                    });

                    handleFirebaseMessage(messaging);
                }
            });
        }
    }

    function handleFirebaseMessage(messaging) {
        onMessage(messaging, (payload) => {
            console.log('Message received. ', payload);
            // ...
            try {
                const data = JSON.parse(payload.data?.body);
        
                console.log(data);

                toastr.success(data.message, 'Success');
                if (data?.goto) {
                    setTimeout(function() {
                        window.location.href = data.goto;
                    }, 1000);
                }
            } catch (e) {
                toastr.error("Something went wrong!", "Error Alert");
                console.log('error on message', e);

                setTimeout(function() {
                    window.location.reload();
                }, 1000);
            }
        });
    }
    
    function setupAjax() {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        })
    }
});