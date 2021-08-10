import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBy8htKK9wQvnga_oqzVs3LBpgagz7Q8ko",
    authDomain: "crwn-db-50ff6.firebaseapp.com",
    projectId: "crwn-db-50ff6",
    storageBucket: "crwn-db-50ff6.appspot.com",
    messagingSenderId: "844907044744",
    appId: "1:844907044744:web:7eaf368cd5527c2c35243d",
    measurementId: "G-TQJZKLE43F"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;