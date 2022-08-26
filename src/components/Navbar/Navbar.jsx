import React from 'react';

import './Navbar.scss';
import NavbarSearch from 'components/NavbarSearch/NavbarSearch';
import { ReactComponent as Logo } from 'logo.svg';
import Basket from 'components/Basket/Basket';

function Navbar() {
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

export default Navbar;
