import React, { useContext, useState } from 'react';
import './NavbarSearch.scss';
import AppContext from 'contexts/AppContext/AppContext';

function NavbarSearch(props) {
  const { searchText, clearFilters } = useContext(AppContext);
  const [text, setText] = useState('');

  const handleOnChange = (e) => {
    const value = e.target.value.trim();
    setText(value);
    if (value.length > 2) {
      searchText(value);
    } else {
      clearFilters();
    }
  };

  return (
    <label className="search-input__container">
      <span className="search-input__icon">⌕</span>
      <input
        className="search-input"
        data-testid="navbar-search"
        placeholder="25 milyon’dan fazla ürün içerisinde ara"
        value={text}
        onChange={handleOnChange}
        {...props}
      ></input>
    </label>
  );
}

export default NavbarSearch;
