function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.com/v2/name/${searchQuery}`).then(res =>
    res.json(),
  );
}

export default fetchCountries;
