import { useState, useEffect, createContext} from "react"
export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDark')));

    useEffect(() => {
        localStorage.setItem('isDark', isDark)
      }, [isDark])

    return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}