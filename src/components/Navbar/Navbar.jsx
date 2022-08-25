import React from 'react';
import PropTypes from 'prop-types';

import './Navbar.scss';
import NavbarSearch from 'components/NavbarSearch/NavbarSearch';
import { ReactComponent as Logo } from 'logo.svg';
import Basket from 'components/Basket/Basket';

function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <Logo></Logo>
        <NavbarSearch></NavbarSearch>
        <Basket></Basket>
      </div>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;
