import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAthglEIhUeTHH9r4IKIjBSnBqd6XnSDBI",
  authDomain: "clothing-reat-app.firebaseapp.com",
  databaseURL: "https://clothing-reat-app.firebaseio.com",
  projectId: "clothing-reat-app",
  storageBucket: "",
  messagingSenderId: "807667202777",
  appId: "1:807667202777:web:4060d4d0d894c70d9cdcc8"
};
firebase.initializeApp(firebaseConfig);
const firestore= firebase.firestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot= await userRef.get();
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt= new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch (e) {
      console.log('error creating user', e.message)
    }
  }
  return userRef;
};

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
