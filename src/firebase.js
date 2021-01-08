import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
  
    apiKey: "AIzaSyD-QH9fx9BMOHr0v8KcG5qnRB1kUCAwGKw",
    authDomain: "facebook-messenger-clone-6796a.firebaseapp.com",
    projectId: "facebook-messenger-clone-6796a",
    storageBucket: "facebook-messenger-clone-6796a.appspot.com",
    messagingSenderId: "975422709789",
    appId: "1:975422709789:web:71e6f0a731859ac5cf66f4",
    measurementId: "G-HCX225XLD5"
});

const db = firebaseApp.firestore();

export default db;