
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({children}) => {
const [user,setUser] = useState(null);

const providerLogIn = (provider) =>{
    return signInWithPopup(auth, provider);
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

 const authInfo = {user,providerLogIn};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;