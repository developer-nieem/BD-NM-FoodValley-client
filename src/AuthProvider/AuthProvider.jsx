import React, { createContext } from 'react';
import app from '../FireBase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";

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

    const authInfo ={
        name,
        createUser,
        userProfile
    }
    return (
        
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        
    );
};

export default AuthProvider;