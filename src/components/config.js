 import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyA00892hMWwyP15rg-5pGiXUQFU92VYZ9o",
    authDomain: "forex-app-6d563.firebaseapp.com",
    databaseURL: "https://forex-app-6d563.firebaseio.com",
    projectId: "forex-app-6d563",
    storageBucket: "forex-app-6d563.appspot.com",
    messagingSenderId: "549319970424",
    appId: "1:549319970424:web:f484073bf82a69c349a78d",
    measurementId: "G-HYKWJ313H2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const f=firebase;
  export const database=firebase.database();
  export const storage=firebase.storage();
  export const auth=firebase.auth();