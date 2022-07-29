import { useContext, createContext, useEffect, useState } from 'react';


const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
  const myName = 'Maximilian'

    return (
      <AuthContext.Provider value = 'Max'>
        {children}
      </AuthContext.Provider>
    )
  }

  export const UserAuth = () => {
    return useContext(AuthContext)
  }
