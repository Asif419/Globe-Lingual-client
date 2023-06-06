import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  // variables

  const [darkTheme, setDarkTheme] = useState(false);

  const user = { name: 'asif' };
  const authInfo = {
    darkTheme,
    user,
    setDarkTheme,
  }

  // functions



  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProviders;