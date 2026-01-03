import Card from "./Card";
import countriesData from "../countriesData";
import { useState } from "react";

const Countries = ({ query }) => {
  const [countries, setCountries] = useState([]);

  setTimeout(() => {
    setCountries(countriesData);
  }, 3000);


  return (
    <div className="countries-container">
      {countries
        .filter((country) => country.name.toLowerCase().includes(query))
        .map((country) => (
          <Card
            key={country.name}
            name={country.name}
            flag={country.flag}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
    </div>
  )
}

export default Countries;