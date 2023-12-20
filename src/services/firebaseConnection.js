import firebase from "firebase/app";
import 'firebase/database'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBpb0EUTS75KYbUH7vy3c299sjQslrwKfw",
    authDomain: "meuapp-94469.firebaseapp.com",
    databaseURL: "https://meuapp-94469-default-rtdb.firebaseio.com",
    projectId: "meuapp-94469",
    storageBucket: "meuapp-94469.appspot.com",
    messagingSenderId: "191863294944",
    appId: "1:191863294944:web:e0dace3dbfccb0f85c3985",
    measurementId: "G-S0K24MGD9Z"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
  