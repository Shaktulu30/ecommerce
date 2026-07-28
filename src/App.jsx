import ItemDetailContainer from './components/ItemDetailContainer';
// import ProductDetail from './pages/ProductDetail';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </div>
  );
}

export default App;