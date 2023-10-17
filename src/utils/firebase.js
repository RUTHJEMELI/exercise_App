// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_KEY,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_BUCKET_STORAGE,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const signInWithGoogle = async() => {
  await signInWithPopup(auth, provider).then((result) => {
    console.log(result)
    const name = result.user.displayName
    const email = result.user.email
    const photoURL = result.user.photoURL

    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
    localStorage.setItem('photoURL', photoURL)

    
  }).catch((error) => {
    console.log(error.message)
  })
}