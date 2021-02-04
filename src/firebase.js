import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC32_3nM68XBmnCgfyPk-9F1vlH2Nz2lto",
  authDomain: "slack-clone-a43bc.firebaseapp.com",
  projectId: "slack-clone-a43bc",
  storageBucket: "slack-clone-a43bc.appspot.com",
  messagingSenderId: "154875295033",
  appId: "1:154875295033:web:ed779ad342db159456e4e8",
  measurementId: "G-W4K7BBKL2Q",
};

const firerbaseApp = firebase.initializeApp(firebaseConfig); //initialised db
const db = firerbaseApp.firestore();
const auth = firebase.auth(); //prepare authentication module
const provider = new firebase.auth.GoogleAuthProvider(); //prepare google services provider

export { auth, provider };
export default db;
