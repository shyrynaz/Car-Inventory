import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'

 var firebaseConfig = {
  apiKey: "AIzaSyAZDkYqvIfNQ3HMtTvD7aiWwDszzu6jH5c",
  authDomain: "car-inventory-b9e77.firebaseapp.com",
  databaseURL: "https://car-inventory-b9e77.firebaseio.com",
  projectId: "car-inventory-b9e77",
  storageBucket: "car-inventory-b9e77.appspot.com",
  messagingSenderId: "559463622721",
  appId: "1:559463622721:web:1f113b3b6b6d24ba"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true});
const storage = firebase.storage();


export {storage, firebase as default};