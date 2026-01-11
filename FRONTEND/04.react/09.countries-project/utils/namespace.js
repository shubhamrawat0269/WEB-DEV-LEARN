export const ALL_COUNTRY_DATA_API = 'https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital';

export const GET_SINGLE_COUNTRY_DETAILS = (countryName) => {
    return `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
}