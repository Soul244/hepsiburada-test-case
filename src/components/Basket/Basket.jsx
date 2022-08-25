import React, { useContext } from 'react';
import './Basket.scss';
import AppContext from 'contexts/AppContext/AppContext';

function Basket() {
  const { state, removeBasket } = useContext(AppContext);

  return (
    <div className={`basket__container ${!state.basket.length ? 'basket__container--disabled' : ''}`}>
      <div className="basket">
        Sepetim
        <span className="basket__count">{state.basket.length}</span>
      </div>
      <ul className="basket__popover">
        {state.basket.map((item) => (
          <li key={`basket-${item.id}`} className="basket__popover-item">
            <img src={item.imgPath} alt={item.title} className="basket__popover-image"></img>
            <div className="basket__popover-content">
              <p className="basket__popover-text">{item.title}</p>
              <button className="basket__popover-button" type="button" onClick={() => removeBasket(item.id)}>
                Kaldır
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Basket;
