import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBP9j17nrr-Kb0BUjW68VizMnzQpQ35bYU",
    authDomain: "crwn-db-dca89.firebaseapp.com",
    projectId: "crwn-db-dca89",
    storageBucket: "crwn-db-dca89.appspot.com",
    messagingSenderId: "654119592689",
    appId: "1:654119592689:web:3a1c6269e077cdf1127f50",
    measurementId: "G-2CTZXDYXMH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


