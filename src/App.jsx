import Navbar from './components/Navbar/Navbar';
import './App.scss';
import Sidebar from 'components/Sidebar/Sidebar';
import AppContextProvider from 'contexts/AppContext/AppContextProvider';
import ProductCardList from 'components/ProductCardList/ProductCardList';

function App() {
  return (
    <AppContextProvider>
      <Navbar></Navbar>
      <div className="container">
        <div className="header">
          <div>
            <h1 className="header__title">iPhone iOS cep telefonu</h1>
            <p className="header__subtitle">
              Aranan Kelime: <span>iphone 11</span>
            </p>
          </div>
        </div>
        <div className="content">
          <Sidebar></Sidebar>
          <ProductCardList></ProductCardList>
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
