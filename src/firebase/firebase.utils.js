import * as firebase from 'firebase';

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

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
