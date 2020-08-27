import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAP5OacVa8NYi7y7AihQBEghvIAD_6nK8w",
    authDomain: "crwn-db-99998.firebaseapp.com",
    databaseURL: "https://crwn-db-99998.firebaseio.com",
    projectId: "crwn-db-99998",
    storageBucket: "crwn-db-99998.appspot.com",
    messagingSenderId: "364242587731",
    appId: "1:364242587731:web:e7363d3995be6c79b776a6",
    measurementId: "G-5P5MRWVGQS"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
