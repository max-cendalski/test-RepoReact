import { useContext, createContext, useEffect, useState } from 'react';


const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
  const credentials = {name:'Maximilian',lastName:'Cendalski'}

    return (
      <AuthContext.Provider value={credentials}>
        {children}
      </AuthContext.Provider>
    )
  }

  export default AuthContext;
