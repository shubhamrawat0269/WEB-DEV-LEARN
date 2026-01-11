import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoReturnUpBack } from "react-icons/io5";
import SingleCountryShimmer from './SingleCountryShimmer';
import { useGlobalContext } from '../hooks/useGlobalContext';
import { useFetch } from '../hooks/useFetch';
import { updatedCountryData } from '../utils/shared-function.js';

export default function SingleCountry() {
  const [country, setCountry] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const { isDark } = useGlobalContext();
  const params = useParams();
  const countryName = params.country;
  const { data : countryDetail, loading, error } = useFetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)

  useEffect(() => {
    if(countryDetail) updatedCountryData(countryDetail[0], setCountry, setNotFound)
  }, [countryDetail])
    
  if (loading) {
    return <SingleCountryShimmer />
  }

  if (error || notFound) {
    return <div className="error-page">Country Not Found</div>
  }

  return (
    <main className={`${isDark && 'dark'}`}>
      <div className="country-details-container">
        <Link className="back-button" to={`/`}>
          <IoReturnUpBack size={16} /> Back
        </Link>
        {country === null ? (
          <SingleCountryShimmer />
        ) : (
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
        )}
      </div>
    </main>
  )
}
