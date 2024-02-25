import { createContext, useContext, useState, useEffect } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth, db } from "../services/firebase.js";
import { doc, setDoc } from "firebase/firestore";
const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

 async function signup(email, password) {
    try {
        // Create user in Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Access the newly created user's email
        const userEmail = userCredential.user.email;

        // Store additional user data in Firestore
        await setDoc(doc(db, 'users', userEmail), {
            favShows: [],
        });

        console.log('User signed up successfully and data stored in Firestore.');
    } catch (error) {
        console.error('Error signing up user:', error);
    }
}

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  return (
    <AuthContext.Provider value={{ user, signup, logOut, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
