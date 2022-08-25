import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ProductCard.scss';
import AppContext from 'contexts/AppContext/AppContext';

function ProductCard(props) {
  const { state, addBasket } = useContext(AppContext);
  const { id, imgPath, title, brand, color, price, oldPrice, discountPercentage } = props;

  const [isInBasket, setIsInBasket] = useState(false);

  useEffect(() => {
    const isFound = state.basket.some((item) => item.id === id);
    setIsInBasket(isFound);
  }, [state.basket, id]);

  return (
    <div className={`product-card ${isInBasket ? 'product-card--selected' : ''}`}>
      <figure className="product-card__image-container">
        <img className="product-card__image" src={imgPath} alt={title} />
        <figcaption className="product-card__title">{title}</figcaption>
      </figure>
      <dl className="product-card__content">
        <div className="product-card__description">
          <dt className="product-card__description-title">Marka:&nbsp;</dt>
          <dd className="product-card__description-text">{brand}</dd>
        </div>
        <div className="product-card__description">
          <dt className="product-card__description-title">Renk:&nbsp;</dt>
          <dd className="product-card__description-text">{color}</dd>
        </div>
      </dl>
      <div className="product-card__content">
        <p className="product-card__price">{`${price} TL`}</p>
        <p style={{ margin: 0 }}>
          <span className="product-card__old-price">{`${oldPrice} TL`}</span>
          <span className="product-card__discount-percentage">{discountPercentage}</span>
        </p>
      </div>
      <button className="product-card__button" onClick={() => addBasket(props)} disabled={isInBasket}>
        {isInBasket ? 'Bu ürünü sepete ekleyemezsiniz.' : 'Sepete Ekle'}
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  imgPath: PropTypes.string,
  title: PropTypes.string,
  brand: PropTypes.string,
  color: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  discountPercentage: PropTypes.string,
};

export default ProductCard;
