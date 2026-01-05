import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import countriesData from '../countriesData'
import { IoReturnUpBack } from "react-icons/io5";


export default function SingleCountry() {
  const [country, setCountry] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const params = useParams();
  const countryName = params.country;

  useEffect(() => {
    const countryData = countriesData.find((c) => c.name.toLowerCase() === countryName?.toLowerCase())
    if (countryData) {
      setCountry(countryData)
      setNotFound(false)
    } else {
      setNotFound(true)
    }
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
            <img src={country.flag} alt={`${country.name} flag`} />
            <div className="details-text-container">
              <h1>{country.name}</h1>
              <div className="details-text">
                <p>
                  <b>Native Name: </b> {country.nativeName || country.name}
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
                  <b>Capital: </b>
                  {country.capital}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
