import Countries from "./components/Countries";
import Header from "./components/Header";
import PrimarySearchFilter from "./components/PrimarySearchFilter";
import { useState, useEffect } from "react";

const App = () => {
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState('')
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
      <PrimarySearchFilter setQuery={setQuery} setSortBy={setSortBy} />
      <Countries query={query} sortBy={sortBy} />
    </>
  )
}

export default App;