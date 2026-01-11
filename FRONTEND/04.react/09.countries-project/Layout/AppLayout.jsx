import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import { useGlobalContext } from "../hooks/useGlobalContext";

const AppLayout = () => {
  const { isDark, setIsDark } = useGlobalContext();

  return (
    <>
      <Header theme={[isDark, setIsDark]} />
      <Outlet context={{isDark}}/>
    </>
  )
}

export default AppLayout;