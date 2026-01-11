import Countries from "../components/Countries";
import PrimarySearchFilter from "../components/PrimarySearchFilter";
import { useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";

const Home = () => {
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState('')
  const { isDark } = useGlobalContext();

  return (
    <main className={`${isDark && 'dark'}`}>
      <PrimarySearchFilter setQuery={setQuery} setSortBy={setSortBy} />
      <Countries query={query} sortBy={sortBy} />
    </main>
  )
}

export default Home;