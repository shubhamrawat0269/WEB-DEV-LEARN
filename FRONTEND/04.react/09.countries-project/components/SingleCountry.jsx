import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoReturnUpBack } from "react-icons/io5";
import SingleCountryShimmer from './SingleCountryShimmer';


export default function SingleCountry() {
  const [country, setCountry] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const params = useParams();
  const countryName = params.country;

  function modifyCountry(data){
    setCountry({
      name: data.name.common,
      flags: data.flags,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital.join(', '),
      nativeName: Object.values(data.name.nativeName)[0].official,
      currency: Object.values(data.currencies)[0].name,
      tld: data.tld.join(', '),
      languages: data.languages,
      borders: []
    })

    if(!data.borders){
      data.borders = [];
    }

    const borderCountriesPromises = data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => res.json())
        .then(([borderCountry]) => borderCountry.name.common)
    })

    Promise.all(borderCountriesPromises)
    .then((borders) => {
      setCountry((preState) => ({...preState, borders}))
    })

    setNotFound(false)
  }

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        modifyCountry(data);
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
