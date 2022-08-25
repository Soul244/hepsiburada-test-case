import React, { useReducer } from 'react';
import { appReducer, appReducerInitialState } from './AppReducer';
import AppContext from './AppContext';
import { ACTIONS, ORDERS } from './contants';

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

  const handleOrder = (order) => {
    let orderedProducts;
    switch (order) {
      case ORDERS.ASC_PRICE:
        orderedProducts = state.products.sort((a, b) => {
          return a.price - b.price;
        });
        break;
      case ORDERS.DESC_PRICE:
        orderedProducts = state.products.sort((a, b) => {
          return b.price - a.price;
        });
        break;
      case ORDERS.OLDEST:
        orderedProducts = state.products.sort((a, b) => {
          return a.createdAt - b.createdAt;
        });
        break;
      case ORDERS.NEWEST:
        orderedProducts = state.products.sort((a, b) => {
          return b.createdAt - a.createdAt;
        });
        break;
      default:
        break;
    }
    dispatch({ type: ACTIONS.ORDER, payload: { products: orderedProducts, order } });
  };

  const clearFilters = () => {
    dispatch({ type: ACTIONS.CLEAR_FILTERS });
  };

  return (
    <AppContext.Provider value={{ state, addBasket, removeBasket, searchText, clearFilters, handleOrder }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
