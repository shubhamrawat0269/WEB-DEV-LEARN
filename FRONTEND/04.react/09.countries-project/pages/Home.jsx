import Countries from "../components/Countries";
import PrimarySearchFilter from "../components/PrimarySearchFilter";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState('')
  const { isDark } = useContext(ThemeContext);

  return (
    <main className={`${isDark && 'dark'}`}>
      <PrimarySearchFilter setQuery={setQuery} setSortBy={setSortBy} />
      <Countries query={query} sortBy={sortBy} />
    </main>
  )
}

export default Home;