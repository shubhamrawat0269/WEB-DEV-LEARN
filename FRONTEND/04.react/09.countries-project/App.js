import "./theme.css";
import CardGrid from "./components/card-grid/CardGrid";
import Header from "./components/header/Header";
import PrimaryHeader from "./components/primary/PrimaryHeader";
import React from "react";

const App = () => {
  const [queryText, setQueryText] = React.useState("");

  return (
    <div className="container">
      <Header />
      <PrimaryHeader queryText={queryText} setQueryText={setQueryText} />
      <CardGrid queryText={queryText} setQueryText={setQueryText} />
    </div>
  );
};

export default App;
