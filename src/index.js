import 'normalize.css';
import './scss/main.scss';

const debounce = require('lodash.debounce');
import fetchCountries from './js/fetchCountries.js';
import updateCountriesMarkup from './js/updateCountriesMarkup.js';

import refs from './js/refs.js';

const debouncedFetch = debounce(event => {
  const value = event.target.value;

  if (value === '') {
    refs.listRef.innerHTML = '';
    return;
  }

  fetchCountries(value).then(updateCountriesMarkup);
}, 500);

refs.inputRef.addEventListener('input', debouncedFetch);
