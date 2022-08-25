import { ACTIONS } from './contants';
import { initialProducts, initialBasket, initialFilters } from './initialData';

const appReducerInitialState = {
  products: initialProducts,
  basket: initialBasket,
  filters: initialFilters,
  filter: null,
  order: null,
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
    case ACTIONS.SEARCH_TEXT:
      return {
        ...state,
        products: action.payload.products,
      };
    case ACTIONS.FILTER:
      return {
        ...state,
        products: action.payload.products,
        filter: action.payload.filter,
      };
    case ACTIONS.ORDER:
      return {
        ...state,
        products: action.payload.products,
        order: action.payload.order,
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

export { appReducer, appReducerInitialState };
