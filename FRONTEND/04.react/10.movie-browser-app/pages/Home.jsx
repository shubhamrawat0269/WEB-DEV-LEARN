import Movies from "../components/Movies";
import PrimarySearchFilter from "../components/PrimarySearchFilter";

const Home = () => {
  return (
    <main>
      <PrimarySearchFilter />
      <Movies />
    </main>
  )
}

export default Home;