import React, { createContext } from 'react';
import app from '../FireBase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
const auth = getAuth(app)
    const name = 'nieem'

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
    const authInfo ={
        name,
        createUser,
        userProfile,
        signInUser,
        loginWithGoogle,
        loginWithGithub
    }
    return (
        
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        
    );
};

export default AuthProvider;