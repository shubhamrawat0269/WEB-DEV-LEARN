import { useState, useEffect } from "react"
import Header from "../components/Header"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDark')))

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
    localStorage.setItem('isDark', JSON.stringify(isDark))
  }, [isDark])


  return (
    <>
      <Header theme={[isDark, setIsDark]} />
      <Outlet />
    </>
  )
}

export default AppLayout;