import { createContext } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  return (
    <AppContext.Provider value={{ name: "shubham" }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
