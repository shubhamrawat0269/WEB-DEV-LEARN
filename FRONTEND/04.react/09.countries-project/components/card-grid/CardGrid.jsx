import Card from "./Card";
import styles from "./CardGrid.module.css";

const CardGrid = () => {
  const countries = [
    {
      name: "India",
      flag: "https://flagcdn.com/w320/in.png",
      population: 1405290000,
      region: "Asia",
      capital: "New Delhi",
    },
    {
      name: "Canada",
      flag: "https://flagcdn.com/w320/ca.png",
      population: 38005238,
      region: "Americas",
      capital: "Ottawa",
    },
  ];

  // API URL : https://www.apicountries.com/countries

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
