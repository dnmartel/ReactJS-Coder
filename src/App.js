import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {


  return (

    <BrowserRouter>
      <NavBar itemsCarrito={2} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/asd" element={<ItemListContainer />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
