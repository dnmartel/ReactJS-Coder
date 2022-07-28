import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Provider from './context/CartContext';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';


function App() {


  return (
    <Provider>
      <BrowserRouter>
        <NavBar id="navBar" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias/:categoria" element={<ItemListContainer />} />
          <Route path="/categorias/*" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/item/*" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route
      path="/*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
