import React, { createContext, useEffect, useState } from 'react';
import app from '../FireBase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
const auth = getAuth(app)
    const [user , setUser] =  useState(null);

    // register user
    const createUser =(email, pass)=>{
            return createUserWithEmailAndPassword(auth, email, pass)
    }

    // Update profile

    const userProfile = (name, photo) =>{
       return  updateProfile(auth.currentUser,{
        displayName:name, photoURL:photo
       })
    }

    // sign in user 
    const signInUser = (email,pass) =>{
        return signInWithEmailAndPassword(auth, email, pass)
    }

    // sign in with google 
    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogle =() =>{
        return signInWithPopup(auth, googleProvider)
    }

     // sign in with Github 
     const provider = new GithubAuthProvider();
     const loginWithGithub = () =>{
       return signInWithPopup(auth, provider)
    }

    // current user  observer 

    useEffect(()=>{
      const unsubscribe =   onAuthStateChanged(auth, (loggedUser) =>{
            setUser(loggedUser)
    })
    return () =>{
        unsubscribe()
    }
    },[])
       
    // log out

    const logOut = () =>{
      return  signOut(auth);
    }
    const authInfo ={
        user,
        createUser,
        userProfile,
        signInUser,
        loginWithGoogle,
        loginWithGithub,
        logOut
    }
    return (
        
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        
    );
};

export default AuthProvider;