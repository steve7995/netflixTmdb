// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth';
// import {getFirestore} from 'firebase/firestore'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDvYwnXeTIpMod-gBQBd1xB3EzQ3Mdi3VM",
//   authDomain: "reactmovieflix.firebaseapp.com",
//   projectId: "reactmovieflix",
//   storageBucket: "reactmovieflix.appspot.com",
//   messagingSenderId: "146048176508",
//   appId: "1:146048176508:web:cc21083c0fc53c3065d4f9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB3TB65NpLpj7e6eSDlix33uMgfwivA1I",
  authDomain: "myreactapp-51763.firebaseapp.com",
  projectId: "myreactapp-51763",
  storageBucket: "myreactapp-51763.appspot.com",
  messagingSenderId: "288200435966",
  appId: "1:288200435966:web:706207507ef2d5ee71ddaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);