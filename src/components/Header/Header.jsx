import React, { useContext } from 'react';
import './Header.scss';
import { orderItems } from 'contexts/AppContext/initialData';
import AppContext from 'contexts/AppContext/AppContext';

function Header() {
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
        <option value="" disabled>
          Sıralama
        </option>
        {orderItems.map((item) => (
          <option key={`option-${item.id}`} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Header;
