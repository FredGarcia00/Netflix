import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp ( {
    apiKey: "AIzaSyB_c4W_o57ZPbTTIxrgZnUlk6QWf130NE8",
    authDomain: "netflix-redux.firebaseapp.com",
    projectId: "netflix-redux",
    storageBucket: "netflix-redux.appspot.com",
    messagingSenderId: "1009570745760",
    appId: "1:1009570745760:web:798bacdc219369b5e128c5",
    measurementId: "G-XBV86N8RVM"
  });

  const auth = firebase.auth();

  export { auth };