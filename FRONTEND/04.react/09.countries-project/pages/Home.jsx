import { useOutletContext } from "react-router-dom";
import Countries from "../components/Countries";
import PrimarySearchFilter from "../components/PrimarySearchFilter";
import { useState } from "react";

const Home = () => {
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState('')
  const {isDark} = useOutletContext()

  console.log(isDark)
  return (
    <main className={`${isDark && 'dark'}`}>
      <PrimarySearchFilter setQuery={setQuery} setSortBy={setSortBy} />
      <Countries query={query} sortBy={sortBy} />
    </main>
  )
}

export default Home;