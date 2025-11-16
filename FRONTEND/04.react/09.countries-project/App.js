import CardGrid from "./components/card-grid/CardGrid";
import Header from "./components/header/Header";
import PrimaryHeader from "./components/primary/PrimaryHeader";

const App = () => {
  return (
    <div className="container">
      {/* Header */}
      <Header />
      {/* Primary Container */}
      <PrimaryHeader />
      {/* CardGrid */}
      <CardGrid />
    </div>
  );
};

export default App;
