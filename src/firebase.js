import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBmIA5pDGzPf-epL2iXUi-HEVk1ISCldvw",
  authDomain: "zdrowe-oczko.firebaseapp.com",
  projectId: "zdrowe-oczko",
  storageBucket: "zdrowe-oczko.appspot.com",
  messagingSenderId: "991574261553",
  appId: "1:991574261553:web:8722c75ccafd46c3dfba10",
});

var db = firebaseApp.firestore();

export { db };
