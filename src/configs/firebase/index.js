import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB2gBvQnQa6K3DI0n0kY8S1u5_C53F6ICM",
    authDomain: "system-portfolio.firebaseapp.com",
    databaseURL: "https://system-portfolio-default-rtdb.firebaseio.com",
    projectId: "system-portfolio",
    storageBucket: "system-portfolio.appspot.com",
    messagingSenderId: "857668784445",
    appId: "1:857668784445:web:e9599ececa995d4df8f554",
    measurementId: "G-X57LPBTY8K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export default firebase
