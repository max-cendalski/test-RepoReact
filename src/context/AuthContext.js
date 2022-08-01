import { useContext, createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged} from 'firebase/auth';
import auth from '../components/firebase/Firebase';



const provider = new GoogleAuthProvider()
const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
  const credentials = {name:'Maximilian',lastName:'Cendalski'}

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken;
      const user = result.user;
    })
  }

    return (
      <AuthContext.Provider value={credentials}>
        {children}
      </AuthContext.Provider>
    )
  }

  export const UserAuth = () => {
    return useContext(AuthContext)
  }
