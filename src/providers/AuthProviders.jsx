import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);

  //create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn user

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //observer for current user

  //log out user
  const logOut = () => {
    return signOut(auth)
      .then(() => console.log("User Logged Out"))
      .catch((error) => console.error("Error logging out", error.message));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("user state using useEffect from auth Provider", currentUser);
    });
    return unsubscribe;
  }, []);

  const authInfo = { user, logOut, signInUser, createUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
