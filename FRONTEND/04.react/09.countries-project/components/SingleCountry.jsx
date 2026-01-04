import { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import countriesData from '../countriesData'
import { IoReturnUpBack } from "react-icons/io5";


export default function SingleCountry() {
  const [country, setCountry] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');

  useEffect(() => {
    const countryData = countriesData.find((c) => c.name.toLowerCase() === name?.toLowerCase())
    if (countryData) {
      setCountry(countryData)
      setNotFound(false)
    } else {
      setNotFound(true)
    }
  }, [name])

  if (notFound) {
    return <div className="error-page">Country Not Found</div>
  }

  return (
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={() => navigate(-1)}>
          <IoReturnUpBack /> Back
        </span>
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
                  <b>Sub Region: </b>
                  {country.subregion}
                </p>
                <p>
                  <b>Capital: </b>
                  {country.capital}
                </p>
                <p>
                  <b>Top Level Domain: </b>
                  {country.topLevelDomain?.join(', ')}
                </p>
                <p>
                  <b>Currencies: </b>
                  {country.currencies?.map((c) => c.name).join(', ')}
                </p>
                <p>
                  <b>Languages: </b>
                  {country.languages?.map((l) => l.name).join(', ')}
                </p>
              </div>
              {country.borders && country.borders.length > 0 && (
                <div className="border-countries">
                  <b>Border Countries: </b>&nbsp;
                  {country.borders.map((border) => (
                    <Link key={border} to={`/country?name=${border}`}>
                      {border}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
