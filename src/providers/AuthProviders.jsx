import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider=new GoogleAuthProvider

  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn user

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //signIn with Google 
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log("User Logged In", result.user);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error", error.message);
       
      });
  }

    //log out user
    const logOut = () => {
      setLoading(true);
      return signOut(auth)
        .then(() => console.log("User Logged Out"))
        .catch((error) => console.error("Error logging out", error.message));
    };
  //observer for current user



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("user state using useEffect from auth Provider", currentUser);
    });
    return () => unsubscribe;
  }, []);

  const authInfo = { user,signInWithGoogle, logOut, signInUser, createUser, loading };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
