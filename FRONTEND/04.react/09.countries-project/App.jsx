import Countries from "./components/Countries";
import Header from "./components/Header";
import PrimarySearchFilter from "./components/PrimarySearchFilter";

const App = () => {
  return (
    <>
      <Header />
      <PrimarySearchFilter />
      <Countries />
    </>
  )
}

export default App;