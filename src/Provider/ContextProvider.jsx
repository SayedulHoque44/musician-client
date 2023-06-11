import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { app } from "../Firebase/Firebase.config";
import { myAxios } from "../Hooks/useAxiosSecure";

export const musicianContext = createContext(null);
const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);
  const [tokenLoading, setTokenLoading] = useState(true);
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const Googleprovider = new GoogleAuthProvider();

  // Set theme
  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  // Register
  const createUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  // Login
  const logIn = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  // Logout
  const logout = (email, pass) => {
    setLoading(true);
    return signOut(auth);
  };
  // googlein
  const googleIn = (email, pass) => {
    setLoading(true);
    return signInWithPopup(auth, Googleprovider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        myAxios
          .post("/jwt", { email: currentUser.email })
          .then((res) => {
            localStorage.setItem("access-token", res.data.token);
            setTokenLoading(false);
          })
          .catch((err) => toast(err.message));
      } else {
        localStorage.removeItem("access-token");
        setTokenLoading(true);
      }
    });

    return () => unSubscribe();
  }, []);

  // Provide Value
  const contextValue = {
    theme,
    toggleTheme,
    createUser,
    logIn,
    logout,
    googleIn,
    loading,
    setLoading,
    user,
    tokenLoading,
  };

  return (
    <musicianContext.Provider value={contextValue}>
      {children}
    </musicianContext.Provider>
  );
};

export default ContextProvider;
