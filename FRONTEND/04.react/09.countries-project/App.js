import "./theme.css";
import CardGrid from "./components/card-grid/CardGrid";
import Header from "./components/header/Header";
import PrimaryHeader from "./components/primary/PrimaryHeader";

const App = () => {
  return (
    <div className="container">
      <Header />
      <PrimaryHeader />
      <CardGrid />
    </div>
  );
};

export default App;
