import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCipC96CSLX8qciWirmtFE4J_Cd9fmUrAk",
    authDomain: "face-app-1bcd7.firebaseapp.com",
    projectId: "face-app-1bcd7",
    storageBucket: "face-app-1bcd7.appspot.com",
    messagingSenderId: "701820001882",
    appId: "1:701820001882:web:2d5ed21637c47ef2cb0263",
    measurementId: "G-GXFM5632L2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider};
  export default db;
  