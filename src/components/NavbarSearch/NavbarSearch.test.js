import { render, screen, fireEvent } from '@testing-library/react';
import AppContextProvider from 'contexts/AppContext/AppContextProvider';
import NavbarSearch from './NavbarSearch';

test('Render Navbar Search', () => {
  render(
    <AppContextProvider>
      <NavbarSearch />
    </AppContextProvider>
  );
});

test('onChange Navbar Search', () => {
  render(
    <AppContextProvider>
      <NavbarSearch />
    </AppContextProvider>
  );
  const input = screen.getByTestId('navbar-search');
  fireEvent.change(input, { target: { value: 'abcabc' } });
  expect(input.value).toBe('abcabc');
});
