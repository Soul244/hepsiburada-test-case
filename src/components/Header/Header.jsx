import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { orderItems } from 'contexts/AppContext/initialData';
import AppContext from 'contexts/AppContext/AppContext';

function Header(props) {
  const { state, handleOrder } = useContext(AppContext);

  return (
    <div className="header">
      <div>
        <h1 className="header__title">iPhone iOS cep telefonu</h1>
        <p className="header__subtitle">
          Aranan Kelime: <span>iphone 11</span>
        </p>
      </div>
      <select className="header__select" value={state.order} onChange={(e) => handleOrder(e.target.value)}>
        <option value="" disabled selected>
          Sıralama
        </option>
        {orderItems.map((item) => (
          <option value={item.value}>{item.name}</option>
        ))}
      </select>
    </div>
  );
}

Header.propTypes = {};

export default Header;
