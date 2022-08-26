import { render, screen, fireEvent } from '@testing-library/react';
import AppContextProvider from 'contexts/AppContext/AppContextProvider';
import Basket from './Basket';

let state = {};

beforeAll(() => {
  state.basket = [
    {
      id: 1,
      imgPath: 'https://loremflickr.com/224/322/nature?45135',
      title: 'Araba',
      brand: 'Tekelioğlu, Topaloğlu and',
      color: 'sarı',
      price: 1139,
      oldPrice: 1340,
      discountPercentage: '15%',
      createdAt: new Date('2004-07-24T08:53:37.234Z'),
    },
    {
      id: 2,
      imgPath: 'https://loremflickr.com/224/322/fashion?37677',
      title: 'Top',
      brand: 'Polat Group',
      color: 'mavi',
      price: 961.35,
      oldPrice: 1105,
      discountPercentage: '13%',
      createdAt: new Date('2021-07-18T19:31:19.371Z'),
    },
    {
      id: 3,
      imgPath: 'https://loremflickr.com/224/322/animals?28573',
      title: 'Havlu',
      brand: 'Evliyaoğlu, Poyrazoğlu an',
      color: 'mavi',
      price: 1158.4,
      oldPrice: 1448,
      discountPercentage: '20%',
      createdAt: new Date('2010-06-09T21:26:54.613Z'),
    },
    {
      id: 4,
      imgPath: 'https://loremflickr.com/224/322/technics?97271',
      title: 'Tablo',
      brand: 'Orbay - Uca',
      color: 'erik',
      price: 677.45,
      oldPrice: 797,
      discountPercentage: '15%',
      createdAt: new Date('2013-04-29T20:50:45.012Z'),
    },
  ];
});

test('Render Basket Component', () => {
  render(
    <AppContextProvider testState={state}>
      <Basket />
    </AppContextProvider>
  );
});

test('Remove Item from Basket', () => {
  render(
    <AppContextProvider testState={state}>
      <Basket />
    </AppContextProvider>
  );
  fireEvent.click(screen.getAllByText('Kaldır')[0]);
  expect(screen.getByTestId('basket-count')).toHaveTextContent('3');
});
