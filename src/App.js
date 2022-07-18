import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {


  return (

    <BrowserRouter>
      <NavBar itemsCarrito={2} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias/:categoria" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/item/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
