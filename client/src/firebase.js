import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBkMMtf2kahTKJ8G2TxOLqV11JXl0F8Yd0",
  authDomain: "doing-it-bbam.firebaseapp.com",
  databaseURL: "https://doing-it-bbam.firebaseio.com",
  projectId: "doing-it-bbam",
  storageBucket: "doing-it-bbam.appspot.com",
  messagingSenderId: "878190373910",
  appId: "1:878190373910:web:723775d81433fa0fe2d937",
  measurementId: "G-J5ZCNKHVS9",
};

export const fireLogin = firebase.initializeApp(firebaseConfig);

export const auth = fireLogin.auth();
export const firestore = fireLogin.firestore();
console.log(auth)
console.log(`Firebase Loaded!`)
