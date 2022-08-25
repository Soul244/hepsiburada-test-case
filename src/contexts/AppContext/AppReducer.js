import { initialProducts, initialBasket, initialFilters } from './InitialData';

const ACTIONS = {
  ADD_BASKET: 'ADD_BASKET',
  REMOVE_BASKET: 'REMOVE_BASKET',
  SEARCH_TEXT: 'SEARCH_TEXT',
  FILTER: 'FILTER',
  CLEAR_FILTERS: 'CLEAR_FILTERS',
};

const appReducerInitialState = {
  products: initialProducts,
  basket: initialBasket,
  filters: initialFilters,
  selectedFilters: [],
};

const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_BASKET:
      const newBasket = [...state.basket, action.payload.product];
      localStorage.setItem('basket', JSON.stringify(newBasket));
      return {
        ...state,
        basket: newBasket,
      };
    case ACTIONS.REMOVE_BASKET:
      const filteredBasket = state.basket.filter((item) => item.id !== action.payload.productId);
      localStorage.setItem('basket', JSON.stringify(filteredBasket));
      return {
        ...state,
        basket: filteredBasket,
      };
    case ACTIONS.FILTER:
    case ACTIONS.SEARCH_TEXT:
      return {
        ...state,
        products: action.payload.products,
      };
    case ACTIONS.CLEAR_FILTERS:
      return {
        ...state,
        products: initialProducts,
      };
    default:
      return state;
  }
};

export { appReducer, appReducerInitialState, ACTIONS };
