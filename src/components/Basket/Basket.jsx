import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './Basket.scss';
import AppContext from 'contexts/AppContext/AppContext';

function Basket(props) {
  const { state } = useContext(AppContext);

  return (
    <div className="basket">
      Sepetim
      <span className="basket__count">{state.basket.length}</span>
    </div>
  );
}

Basket.propTypes = {};

export default Basket;
