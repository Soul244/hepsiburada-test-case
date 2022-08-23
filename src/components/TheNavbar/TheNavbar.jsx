import React from 'react';
import PropTypes from 'prop-types';

import './TheNavbar.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

function TheNavbar(props) {
  return (
    <nav className='navbar'>
      <Logo></Logo>
    </nav>
  )
}

TheNavbar.propTypes = {}

export default TheNavbar
