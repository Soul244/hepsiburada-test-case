import { faker } from '@faker-js/faker';

faker.setLocale('tr');

const createMockData = (itemCount) => {
  const mockData = [];
  for (let index = 0; index < itemCount; index++) {
    const oldPrice = parseInt(faker.commerce.price(500, 1500, 2), 10);
    const discountPercentage = Math.floor(Math.random() * 20) + 5;
    const newPrice = oldPrice - (oldPrice / 100) * discountPercentage;
    mockData.push({
      id: mockData.length + 1,
      imgPath: faker.image.image(224, 322, true),
      title: faker.commerce.product().slice(0, 30),
      brand: faker.company.name().slice(0, 30),
      color: faker.color.human(),
      price: newPrice,
      oldPrice: oldPrice,
      discountPercentage: `${discountPercentage}%`,
      createdAt: faker.date.between('2003-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z'),
    });
  }
  return mockData;
};

export default createMockData;
