import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
 var firebaseConfig = {
  apiKey: "AIzaSyAZDkYqvIfNQ3HMtTvD7aiWwDszzu6jH5c",
  authDomain: "car-inventory-b9e77.firebaseapp.com",
  databaseURL: "https://car-inventory-b9e77.firebaseio.com",
  projectId: "car-inventory-b9e77",
  storageBucket: "",
  messagingSenderId: "559463622721",
  appId: "1:559463622721:web:1f113b3b6b6d24ba"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;