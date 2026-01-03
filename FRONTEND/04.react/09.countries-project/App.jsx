import Countries from "./components/Countries";
import Header from "./components/Header";
import PrimarySearchFilter from "./components/PrimarySearchFilter";
import { useState } from "react";

const App = () => {
  const [query, setQuery] = useState('')
  return (
    <>
      <Header />
      <PrimarySearchFilter setQuery={setQuery} />
      <Countries query={query} />
    </>
  )
}

export default App;