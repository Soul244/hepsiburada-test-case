import React from 'react';
import PropTypes from 'prop-types';
import './NavbarSearch.scss';

function NavbarSearch(props) {
  return (
    <label className="search-input__container">
      <span className="search-input__icon">⌕</span>
      <input className="search-input" placeholder="25 milyon’dan fazla ürün içerisinde ara" {...props}></input>
    </label>
  );
}

NavbarSearch.propTypes = {};

export default NavbarSearch;
