import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './NavbarSearch.scss';
import AppContext from 'contexts/AppContext/AppContext';

function NavbarSearch(props) {
  const { searchText, clearFilters } = useContext(AppContext);
  const [text, setText] = useState('');
  const [isFiltered, setIsFiltered] = useState(false);

  const handleOnChange = (e) => {
    const value = e.target.value.trim();
    setText(value);
    if (value.length > 2) {
      searchText(value);
      setIsFiltered(true);
    } else if (isFiltered) {
      setIsFiltered(false);
      clearFilters();
    }
  };

  return (
    <label className="search-input__container">
      <span className="search-input__icon">⌕</span>
      <input
        className="search-input"
        placeholder="25 milyon’dan fazla ürün içerisinde ara"
        value={text}
        onChange={handleOnChange}
        {...props}
      ></input>
    </label>
  );
}

NavbarSearch.propTypes = {};

export default NavbarSearch;
