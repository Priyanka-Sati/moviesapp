import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAEbFr4HcH7otyGXu6A4jFQCOP8carHXdA",
    authDomain: "netflix-clone-e5ee0.firebaseapp.com",
    projectId: "netflix-clone-e5ee0",
    storageBucket: "netflix-clone-e5ee0.appspot.com",
    messagingSenderId: "775278876874",
    appId: "1:775278876874:web:a29348fa54fe95aaa5fc33",
    measurementId: "G-SGFEWXYSE3"
  };

const firebaseApp =  firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;