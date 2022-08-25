import Navbar from './components/Navbar/Navbar';
import './App.scss';
import Sidebar from 'components/Sidebar/Sidebar';
import AppContextProvider from 'contexts/AppContext/AppContextProvider';
import ProductCardList from 'components/ProductCardList/ProductCardList';
import Header from 'components/Header/Header';

function App() {
  return (
    <AppContextProvider>
      <Navbar></Navbar>
      <div className="container">
        <Header></Header>
        <div className="content">
          <Sidebar></Sidebar>
          <ProductCardList></ProductCardList>
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
