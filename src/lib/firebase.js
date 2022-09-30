import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';

// API Keys
const firebaseConfig = {
  apiKey: "AIzaSyAtWo6iaGvKWclUoOccJX0V1Wyo4JiQDJs",
  authDomain: "auth-svelte-training.firebaseapp.com",
  projectId: "auth-svelte-training",
  storageBucket: "auth-svelte-training.appspot.com",
  messagingSenderId: "519132769448",
  appId: "1:519132769448:web:c29bee9bdadaa5d3f3669d"
};

// Google provider
const provider = new GoogleAuthProvider();

// Initialize Firebase
const app = initializeApp( firebaseConfig );

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth( app );
// const user = auth.currentUser;

function getCurrentUser() {
  return new Promise( ( resolve, reject ) => {
    onAuthStateChanged( auth, ( user ) => {
      resolve( user );
    }, reject );
  } );
}

function logIn( email, password ) {
  return new Promise( ( resolve, reject ) => {
    signInWithEmailAndPassword( auth, email, password )
    .then( ( credentials ) => {
      // console.log( credentials );
      resolve( credentials.user )
    }, reject );
  } );
}

// Register with Google
// function logIn() {
//   return new Promise( ( resolve, reject ) => {
//     signInWithPopup( auth, provider )
//     .then( ( res ) => {
//       console.log( res );
//       resolve( res.user )
//     }, reject );
//   } );
// }

function logOut() {
  return new Promise( ( resolve, reject ) => {
    signOut( auth )
    .then( () => {
      resolve( true )
    }, reject );
  } );
}

function signInUser( email, password ) {
  return new Promise( ( resolve, reject ) => {
    createUserWithEmailAndPassword( auth, email, password )
    .then( ( credentials ) => {
      // console.log( credentials );
      resolve( credentials );
    }, reject )
  } );
}


// Export
export {
  getCurrentUser,
  logIn,
  signInUser,
  logOut
}