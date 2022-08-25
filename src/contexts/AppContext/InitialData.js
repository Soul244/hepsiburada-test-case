import createMockData from '../../createMockData';

let initialProducts = JSON.parse(localStorage.getItem('products'));
const initialBasket = JSON.parse(localStorage.getItem('basket')) || [];

if (!initialProducts) {
  initialProducts = createMockData(32);
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

export { initialProducts, initialFilters, initialBasket };
