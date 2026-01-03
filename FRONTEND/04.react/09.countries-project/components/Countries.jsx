import Card from "./Card";
import countriesData from "../countriesData";
import { useEffect, useState } from "react";
import CountriesShimmer from "./CountriesShimmer";

const Countries = ({ query, sortBy }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setCountries(countriesData);
    }, 3000);
  }, []);

  if (!countries.length) {
    return <CountriesShimmer />
  }

  return (
    <div className="countries-container">
      {countries
        .filter((country) => country.name.toLowerCase().includes(query))
        .filter((country) => {
          if (country.region.includes(sortBy)) return country
        })
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