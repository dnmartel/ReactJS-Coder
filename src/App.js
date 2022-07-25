import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Provider from './context/CartContext';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {


  return (
    <Provider>
      <BrowserRouter>
        <NavBar itemsCarrito={2} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias/:categoria" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/item/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
