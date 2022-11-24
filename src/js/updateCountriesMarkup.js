import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { alert, error } from '@pnotify/core';

import singleCountryMarkup from '../hbs/singleCountryTpl.hbs';
import countriesListMarkup from '../hbs/countriesListTpl.hbs';

import refs from '../js/refs.js';

function updateCountriesMarkup(country) {
  refs.listRef.innerHTML = '';

  if (country.length === 1) {
    const article = singleCountryMarkup(country);

    refs.listRef.insertAdjacentHTML('beforeend', article);
  } else if (country.length > 10) {
    alert({
      text: 'Too many matces found. Please enter a more specific query!',
      delay: 1500,
      minHeight: '30px',
    });
  } else if (!country.length) {
    error({
      text: 'Nothing  found...',
      delay: 1000,
      minHeight: '30px',
    });
  } else {
    const article = countriesListMarkup(country);

    refs.listRef.insertAdjacentHTML('beforeend', article);
  }
}

export default updateCountriesMarkup;
