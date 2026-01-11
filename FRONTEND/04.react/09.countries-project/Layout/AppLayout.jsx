import { useContext } from "react";
import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext";

const AppLayout = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <>
      <Header theme={[isDark, setIsDark]} />
      <Outlet context={{isDark}}/>
    </>
  )
}

export default AppLayout;