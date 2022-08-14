import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Provider from './context/CartContext';
import Checkout from './components/Checkout/Checkout';


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
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<SignIn />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/*" element={
            <main style={{ display: "flex", justifyContent: 'center', padding: "2rem" }}>
            <p>404</p>
            </main>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
