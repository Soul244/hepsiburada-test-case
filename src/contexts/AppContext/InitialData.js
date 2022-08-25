import createMockData from '../../createMockData';
import { ORDERS } from './contants';

let initialProducts = JSON.parse(localStorage.getItem('products'));
let initialBasket = JSON.parse(localStorage.getItem('basket')) || [];

if (!initialProducts) {
  initialProducts = createMockData(32);
  localStorage.setItem('products', JSON.stringify(initialProducts));
} else {
  // we need to convert date as Date Object
  initialProducts = initialProducts.map((product) => {
    return { ...product, createdAt: new Date(product.createdAt) };
  });
}

initialBasket = initialBasket.map((basketItem) => {
  return { ...basketItem, createdAt: new Date(basketItem.createdAt) };
});

const getFilters = (items, filterName, value) => {
  let filters = items;
  const foundIndex = items.findIndex((item) => item.name === filterName);
  if (foundIndex === -1) {
    filters.push({
      id: filters.length + 1,
      name: filterName,
      value,
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
      colors: getFilters(colors, product.color, 'color'),
      brands: getFilters(brands, product.brand, 'brand'),
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
        value: ORDERS.ASC_PRICE,
        isOrderFilter: true,
      },
      {
        id: 2,
        name: 'En Yüksek Fiyat',
        value: ORDERS.DESC_PRICE,
        isOrderFilter: true,
      },
      {
        id: 3,
        name: 'En Yeniler (A>Z)',
        value: ORDERS.NEWEST,
        isOrderFilter: true,
      },
      {
        id: 4,
        name: 'En Yeniler (Z>A)',
        value: ORDERS.OLDEST,
        isOrderFilter: true,
      },
    ],
  },
  {
    id: 3,
    name: 'Marka',
    items: dynamicFilters.brands,
  },
];

export { initialProducts, initialFilters, initialBasket };
