import { Link } from "react-router-dom";

const SingleCountryCard = ({country}) => {
  return (
    <div className="country-details">
            <img src={country.flags.svg} alt={`${country.name} flag`} />
            <div className="details-text-container">
              <h1>{country.name}</h1>
              <div className="details-text">
                <div>
                  <p>
                  <b>Native Name: </b> {country.nativeName}
                </p>
                <p>
                  <b>Population: </b>
                  {country.population.toLocaleString('en-IN')}
                </p>
                <p>
                  <b>Region: </b>
                  {country.region}
                </p>
                <p>
                  <b>Sub Region: </b>
                  {country.subregion}
                </p>
                </div>
                <div>
                  <p>
                  <b>Capital: </b>
                  {country.capital}
                </p>
                <p>
                  <b>Top Level Domain: </b>
                  {country.tld}
                </p>
                <p>
                  <b>Currency: </b>
                  {country.currency}
                </p>
                <p>
                  <b>Languages: </b>
                  {Object.values(country.languages || {}).join(', ')}
                </p>
                </div>
              </div>
                {country.borders.length !== 0 && (
                <div className="border-countries">
                  <b>Borders Countries: </b>&nbsp;
                  {country.borders.map((border) => <Link key={border} to={`/${border}`}>{border}</Link>)}
                </div>
                )}
            </div>
    </div>
  )
}

export default SingleCountryCard