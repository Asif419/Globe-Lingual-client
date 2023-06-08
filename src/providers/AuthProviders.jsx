import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
  // variables---------
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);


  // functions---------
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  const googleSingIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: `${{ name }}`, photoURL: `${{ photo }}`
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      if (currentUser) {
        console.log('signin');
        axios.post('http://localhost:5000/jwt', {
          email: currentUser.email,
        }).then(data => {
          localStorage.setItem('access-token', data.data.token);
          setLoading(false);
        })
      }
      else {
        localStorage.removeItem('access-token');
      }
    });

    return () => {
      return unsubscribe;
    }
  }, [])

  //sending values----------------
  const authInfo = {
    darkTheme,
    user,
    loading,
    setDarkTheme,
    createUser,
    signIn,
    logOut,
    googleSingIn,
    updateUserProfile
  }



  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProviders;