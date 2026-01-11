import { useState, useEffect } from "react"
import Header from "../components/Header"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDark')));

  useEffect(() => {
    localStorage.setItem('isDark', isDark)
  }, [isDark])

  return (
    <>
      <Header theme={[isDark, setIsDark]} />
      <Outlet context={{isDark}}/>
    </>
  )
}

export default AppLayout;