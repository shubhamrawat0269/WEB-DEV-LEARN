import Card from "./Card";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import CountriesShimmer from "./CountriesShimmer";

const Countries = ({ query, sortBy }) => {
  const { data: countries, loading, error } = useFetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital')

  if (loading) {
    return <CountriesShimmer />
  }

  if (error) {
    return <div style={{ textAlign: 'center' }}>Something went wrong! {error}</div>
  }

  return (
    <div className="countries-container">
      {countries
        .filter((country) => country.name.common.toLowerCase().includes(query))
        .filter((country) => {
          if (country.region.includes(sortBy)) return country
        })
        .map((country) => (
          <Link className="country-card-link" to={`/${country.name.common}`} key={country.name.common} state={country}>
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