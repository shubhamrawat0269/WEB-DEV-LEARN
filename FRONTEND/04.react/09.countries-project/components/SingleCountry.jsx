import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoReturnUpBack } from "react-icons/io5";

export default function SingleCountry() {
  const [country, setCountry] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const params = useParams();
  const countryName = params.country;

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountry(data)
        setNotFound(false)
      })
      .catch((err) => {
        console.error(err);
        setNotFound(true)
      })
  }, [countryName])

  if (notFound) {
    return <div className="error-page">Country Not Found</div>
  }

  return (
    <main>
      <div className="country-details-container">
        <Link className="back-button" to={`/`}>
          <IoReturnUpBack /> Back
        </Link>
        {country && (
          <div className="country-details">
            <img src={country.flags.svg} alt={`${country.name.common} flag`} />
            <div className="details-text-container">
              <h1>{country.name.common}</h1>
              <div className="details-text">
                <p>
                  <b>Native Name: </b> {country.name.nativeName ? Object.values(country.name.nativeName)[0].common : country.name.common}
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
                <p>
                  <b>Capital: </b>
                  {country.capital[0]}
                </p>
                <p>
                  <b>Top Level Domain: </b>
                  {country.tld[0]}
                </p>
                {/* <p>
                  <b>Currencies: </b>
                  {country.capital[0]}
                </p> */}
                <p>
                  <b>Languages: </b>
                  {Object.keys(languages).map((lang) => languages[lang]).join(', ')}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
