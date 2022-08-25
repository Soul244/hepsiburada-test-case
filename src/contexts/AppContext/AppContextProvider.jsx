import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { ACTIONS, appReducer, appReducerInitialState } from './AppReducer';
import AppContext from './AppContext';

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

  return <AppContext.Provider value={{ state, addBasket, removeBasket }}>{children}</AppContext.Provider>;
}

AppContextProvider.propTypes = {};

export default AppContextProvider;
