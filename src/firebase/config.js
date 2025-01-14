import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBPCSxD3CARK_pPPZ05EX6KHWrVfMENlCM",
  authDomain: "mymoney-624a4.firebaseapp.com",
  projectId: "mymoney-624a4",
  storageBucket: "mymoney-624a4.firebasestorage.app",
  messagingSenderId: "987737930649",
  appId: "1:987737930649:web:a11783acad60d4c03ff108"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp }