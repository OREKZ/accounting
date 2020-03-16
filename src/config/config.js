 import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyBzyCryFrh41yduLCe1IBF762dp88Pspx8",
    authDomain: "acc-app-17df6.firebaseapp.com",
    databaseURL: "https://acc-app-17df6.firebaseio.com",
    projectId: "acc-app-17df6",
    storageBucket: "acc-app-17df6.appspot.com",
    messagingSenderId: "552952015042",
    appId: "1:552952015042:web:25173d8c947cdb722c335b",
    measurementId: "G-VZNYDK8DBE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const f=firebase;
  export const database=firebase.database();
  export const storage=firebase.storage();
  export const auth=firebase.auth();