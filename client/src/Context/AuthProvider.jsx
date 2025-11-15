import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../Firebase/firebase.config';

const AuthProvider = ({children}) => {

const [user,setUser]=useState(null)
const [loader,setLoader]=useState(true)


// create new user 

const createUser = (email,password )=>{
    setLoader(true)
const newUser = createUserWithEmailAndPassword(auth,email,password)
return newUser
}

// signIn
const signUser=(email,password)=>{
  
    setLoader(true)
    const signIn = signInWithEmailAndPassword(auth,email,password)
    return signIn
}

// signout

const logout =()=>{

    setLoader(true)
    return signOut(auth)
}



// state
useEffect(()=>{

const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{

setUser(currentUser)
setLoader(false)

})
return ()=>unSubscribe()
},[])

const authInfo ={

user,
loader,
createUser,
signUser,
logout,





}


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
