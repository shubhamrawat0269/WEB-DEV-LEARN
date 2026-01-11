import { useState, useEffect } from "react"
import Header from "../components/Header"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <Header theme={[isDark, setIsDark]} />
      <Outlet context={{isDark}}/>
    </>
  )
}

export default AppLayout;