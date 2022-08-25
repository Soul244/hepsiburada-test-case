import React, { useReducer } from 'react';
import { appReducer, appReducerInitialState } from './AppReducer';
import AppContext from './AppContext';
import { ACTIONS, ORDERS } from './contants';
import { initialProducts } from './initialData';

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, appReducerInitialState);

  const addBasket = (product) => {
    if (!state.basket.some((item) => item.id === product.id)) {
      dispatch({ type: ACTIONS.ADD_BASKET, payload: { product } });
    }
  };

  const removeBasket = (productId) => {
    dispatch({ type: ACTIONS.REMOVE_BASKET, payload: { productId } });
  };

  const searchText = (text) => {
    const filteredProducts = state.products.filter(
      (product) => product.title.toLocaleLowerCase().search(text.toLocaleLowerCase()) !== -1
    );
    dispatch({ type: ACTIONS.SEARCH_TEXT, payload: { products: filteredProducts } });
  };

  const orderProducts = (products, order) => {
    switch (order) {
      case ORDERS.ASC_PRICE:
        return products.sort((a, b) => {
          return a.price - b.price;
        });
      case ORDERS.DESC_PRICE:
        return products.sort((a, b) => {
          return b.price - a.price;
        });
      case ORDERS.OLDEST:
        return products.sort((a, b) => {
          return a.createdAt - b.createdAt;
        });
      case ORDERS.NEWEST:
        return products.sort((a, b) => {
          return b.createdAt - a.createdAt;
        });
      default:
        break;
    }
    return products;
  };

  const handleOrder = (order) => {
    dispatch({ type: ACTIONS.ORDER, payload: { products: orderProducts(state.products, order), order } });
  };

  const filterProducts = ({ value, name }) => {
    const filteredProducts = initialProducts.filter((product) => product[value] === name);
    dispatch({
      type: ACTIONS.FILTER,
      payload: { products: orderProducts(filteredProducts, state.order), filter: name },
    });
  };

  const clearFilters = () => {
    dispatch({ type: ACTIONS.CLEAR_FILTERS });
  };

  return (
    <AppContext.Provider
      value={{ state, addBasket, removeBasket, searchText, clearFilters, handleOrder, filterProducts }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
