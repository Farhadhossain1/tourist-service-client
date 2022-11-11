
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({children}) => {
const [user,setUser] = useState(null);

const providerLogIn = (provider) =>{
    return signInWithPopup(auth, provider);
}

const signup = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
}

const login = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
}

const logout = () =>{
    return signOut(auth)
}

const userUpdateProfile = (profile)=>{
    return updateProfile(auth.currentUser, profile);
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
        console.log('user inside state change', currentUser);
        setUser(currentUser);
    });
    return() =>{
        unsubscribe();
    }
},[])

 const authInfo = {user,providerLogIn, signup, login, logout, userUpdateProfile};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;