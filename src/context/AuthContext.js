import { useContext, createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged} from 'firebase/auth';
import {auth} from '../components/firebase/Firebase';



const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
  const credentials = {name:'Maximilian',lastName:'Cendalski'}

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  }

    return (
      <AuthContext.Provider value={
          {
            googleSignIn,
            credentials
          }
        }>
        {children}
      </AuthContext.Provider>
    )
  }

  export const UserAuth = () => {
    return useContext(AuthContext)
  }
