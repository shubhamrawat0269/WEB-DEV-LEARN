import Card from "./Card";
import countriesData from "../../json/countriesData.json";
import styles from "./CardGrid.module.css";
import { useState } from "react";
// API URL : https://www.apicountries.com/countries

const CardGrid = () => {
  const [countries] = useState(countriesData.data);

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {countries.map((country) => (
          <Card key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
