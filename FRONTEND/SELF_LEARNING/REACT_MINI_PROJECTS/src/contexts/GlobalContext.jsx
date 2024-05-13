import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  const context = { theme, setTheme };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContextProvider, GlobalContext };
