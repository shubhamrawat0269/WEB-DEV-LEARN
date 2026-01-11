
export function updatedCountryData(data, dispatchCountry, dispatchNotFound){
    dispatchCountry({
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
      dispatchCountry((preState) => ({...preState, borders}))
    })

    dispatchNotFound(false)
  }