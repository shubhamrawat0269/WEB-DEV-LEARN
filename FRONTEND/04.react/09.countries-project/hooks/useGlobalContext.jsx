import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function useGlobalContext(){
    const { isDark, setIsDark } = useContext(ThemeContext);
    return { isDark, setIsDark };
}