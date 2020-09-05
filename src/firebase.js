
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyC_xnvRuQxe3c4RZ0uhhFUtwE0yrRCARck",
  authDomain: "fb-clone-91115.firebaseapp.com",
  databaseURL: "https://fb-clone-91115.firebaseio.com",
  projectId: "fb-clone-91115",
  storageBucket: "fb-clone-91115.appspot.com",
  messagingSenderId: "196763163187",
  appId: "1:196763163187:web:346865ffa5641c8403e146",
  measurementId: "G-JCFXDMC4J3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth;
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;