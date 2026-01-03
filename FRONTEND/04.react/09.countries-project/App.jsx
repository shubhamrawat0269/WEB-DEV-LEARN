import Countries from "./components/Countries";
import Header from "./components/Header";
import PrimarySearchFilter from "./components/PrimarySearchFilter";
import { useState } from "react";

const App = () => {
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState('')
  return (
    <>
      <Header />
      <PrimarySearchFilter setQuery={setQuery} setSortBy={setSortBy} />
      <Countries query={query} sortBy={sortBy} />
    </>
  )
}

export default App;