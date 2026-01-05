import Card from "./Card";
import countriesData from "../countriesData";
import { useEffect, useState } from "react";
import CountriesShimmer from "./CountriesShimmer";
import { Link } from "react-router-dom";

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
          <Link className="country-card-link" to={`/${country.name}`} key={country.name}>
            <Card
              name={country.name}
              flag={country.flag}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          </Link>
        ))}
    </div>
  )
}

export default Countries;