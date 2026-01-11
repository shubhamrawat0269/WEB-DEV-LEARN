import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoReturnUpBack } from "react-icons/io5";
import SingleCountryShimmer from './SingleCountryShimmer';
import { useGlobalContext } from '../hooks/useGlobalContext';
import { useFetch } from '../hooks/useFetch';
import { updatedCountryData } from '../utils/shared-function.js';
import { GET_SINGLE_COUNTRY_DETAILS } from '../utils/namespace.js';
import SingleCountryCard from './SingleCountryCard.jsx';

export default function SingleCountry() {
  const [country, setCountry] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const { isDark } = useGlobalContext();
  const params = useParams();
  const countryName = params.country;
  const GET_COUNRTRY_API = GET_SINGLE_COUNTRY_DETAILS(countryName);

  const { data : countryDetail, loading, error } = useFetch(GET_COUNRTRY_API)

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
        {country === null ? <SingleCountryShimmer /> : <SingleCountryCard country={country} /> }
      </div>
    </main>
  )
}
