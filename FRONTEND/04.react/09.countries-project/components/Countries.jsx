import Card from "./Card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CountriesShimmer from "./CountriesShimmer";

const Countries = ({ query, sortBy }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital`)
      .then((res) => res.json())
      .then((res) => {
        setCountries(res);
      })
  }, []);

  if (!countries.length) {
    return <CountriesShimmer />
  }

  return (
    <div className="countries-container">
      {countries
        .filter((country) => country.name.common.toLowerCase().includes(query))
        .filter((country) => {
          if (country.region.includes(sortBy)) return country
        })
        .map((country) => (
          <Link className="country-card-link" to={`/${country.name.common}`} key={country.name.common}>
            <Card
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
            />
          </Link>
        ))}
    </div>
  )
}

export default Countries;