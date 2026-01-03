import Card from "./Card";
import countriesData from "../countriesData";

const Countries = () => {
  return (
    <div className="countries-container">
      {countriesData.map((country) => (
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