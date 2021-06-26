import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAK24KJSnS7OkVv1CL9rHoHrnYYmWWDuzM",
    authDomain: "react-socialite-6453a.firebaseapp.com",
    projectId: "react-socialite-6453a",
    storageBucket: "react-socialite-6453a.appspot.com",
    messagingSenderId: "826839221668",
    appId: "1:826839221668:web:a62444798c507d8c5fad31",
    measurementId: "G-1E5SJ9VLP4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;