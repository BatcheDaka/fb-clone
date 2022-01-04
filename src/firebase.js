import firebase from "firebase";
//import firebase from 'firebase/app';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyD3L0pW8i5HpP7hLGkBzEp8Ya3vpzW9cng",
    authDomain: "surat-tefter.firebaseapp.com",
    projectId: "surat-tefter",
    storageBucket: "surat-tefter.appspot.com",
    messagingSenderId: "848208034073",
    appId: "1:848208034073:web:684dc3e8b5bf85ea5c6d88",
    measurementId: "G-JD9D16RFR2"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;