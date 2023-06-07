import React, { createContext, useState } from "react";

export const musicianContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    // console.log(theme);
    setTheme(theme == "light" ? "dark" : "light");
  };

  // Provide Value
  const contextValue = { theme, toggleTheme };

  return (
    <musicianContext.Provider value={contextValue}>
      {children}
    </musicianContext.Provider>
  );
};

export default ContextProvider;
