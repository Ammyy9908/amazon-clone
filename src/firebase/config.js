import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCVIrZq33TBtMlW9qN4V5yk_jXl9xvJq9U",
    authDomain: "clone-f53a4.firebaseapp.com",
    databaseURL: "https://clone-f53a4.firebaseio.com",
    projectId: "clone-f53a4",
    storageBucket: "clone-f53a4.appspot.com",
    messagingSenderId: "1033863236595",
    appId: "1:1033863236595:web:0fad19eaa62a4785232086",
    measurementId: "G-TV58WK5K8N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  export {db,auth};