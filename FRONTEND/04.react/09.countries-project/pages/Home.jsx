import Countries from "../components/Countries";
import PrimarySearchFilter from "../components/PrimarySearchFilter";
import { useState } from "react";

const Home = () => {
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState('')

  return (
    <>
      <PrimarySearchFilter setQuery={setQuery} setSortBy={setSortBy} />
      <Countries query={query} sortBy={sortBy} />
    </>
  )
}

export default Home;