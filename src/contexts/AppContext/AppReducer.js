import productsJson from '../../mockData';

let initialProducts = JSON.parse(localStorage.getItem('products'));
const initialBasket = JSON.parse(localStorage.getItem('basket')) || [];

if (!initialProducts) {
  // Add a random date for filter
  initialProducts = productsJson.map((product) => ({
    ...product,
    createdAt: new Date(new Date() - Math.random() * 1e12),
  }));
  localStorage.setItem('products', JSON.stringify(initialProducts));
}

const getFilters = (items, filterName) => {
  let filters = items;
  const foundIndex = items.findIndex((item) => item.name === filterName);
  if (foundIndex === -1) {
    filters.push({
      id: filters.length + 1,
      name: filterName,
      count: 1,
    });
  } else {
    filters[foundIndex].count = filters[foundIndex].count + 1;
  }
  return filters;
};

const dynamicFilters = initialProducts.reduce(
  ({ colors, brands }, product) => {
    return {
      colors: getFilters(colors, product.color),
      brands: getFilters(brands, product.brand),
    };
  },
  { colors: [], brands: [] }
);

const initialFilters = [
  {
    id: 1,
    name: 'Renkler',
    items: dynamicFilters.colors,
  },
  {
    id: 2,
    name: 'Sıralama',
    items: [
      {
        id: 1,
        name: 'En Düşük Fiyat',
      },
      {
        id: 2,
        name: 'En Yüksek Fiyat',
      },
      {
        id: 3,
        name: 'En Yeniler (A>Z)',
      },
      {
        id: 4,
        name: 'En Yeniler (Z>A)',
      },
    ],
  },
  {
    id: 3,
    name: 'Marka',
    items: dynamicFilters.brands,
  },
];

const ACTIONS = {
  ADD_BASKET: 'ADD_BASKET',
  REMOVE_BASKET: 'REMOVE_BASKET',
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
    default:
      return state;
  }
};

export { appReducer, appReducerInitialState, ACTIONS };
