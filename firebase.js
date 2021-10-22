import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCDQ8zVwMLMS9sfLs0kyEd-9GWnLoCl5o0",
    authDomain: "facebook-yt.firebaseapp.com",
    projectId: "facebook-yt",
    storageBucket: "facebook-yt.appspot.com",
    messagingSenderId: "559430238399",
    appId: "1:559430238399:web:0ecc1aafe22778ba90060a"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app(); 
  const db = app.firestore();
  const storage = firebase.storage();
  
  export {db, storage};