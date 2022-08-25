import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductCard from 'components/ProductCard/ProductCard';
import AppContext from 'contexts/AppContext/AppContext';
import './ProductCardList.scss';

function ProductCardList(props) {
  const { state } = useContext(AppContext);

  return (
    <main className="product-card-list">
      {state.products.map((product) => (
        <ProductCard {...product} key={`product-${product.id}`}></ProductCard>
      ))}
    </main>
  );
}

ProductCardList.propTypes = {};

export default ProductCardList;
