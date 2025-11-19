import Card from "./Card";
import countriesData from "../../json/countriesData.json";
import styles from "./CardGrid.module.css";
import { useEffect, useState } from "react";

const CardGrid = ({ queryText }) => {
  const [countries, setCountries] = useState([]);

  const handleFetchData = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/all?fields=name`);
    const resInJSON = await res.json();
    setCountries(resInJSON);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {countries
          .filter((country) => country.name.common.includes(queryText))
          .map((country) => (
            <Card key={country.name.common} country={country.name} />
          ))}
      </div>
    </div>
  );
};

export default CardGrid;
