import { useContext, createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged} from 'firebase/auth';
import {auth} from '../components/firebase/Firebase';



const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
  const credentials = {name:'Maximilian',lastName:'Cendalski'}

  const [user, setUser] = useState({})

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  };

  const logOut = ()=> {
    signOut(auth)
  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log('user',user)
      console.log('usecurrent',currentUser)
    });
    return () => {
      unsubscribe()
    }
  },[])

    return (
      <AuthContext.Provider value={
          {
            googleSignIn,
            signOut,
            credentials,
            user
          }
        }>
        {children}
      </AuthContext.Provider>
    )
  }

  export const UserAuth = () => {
    return useContext(AuthContext)
  }
