import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="App-header">
        <ItemListContainer greeting="Bienvenidos al ecommerce">
            <ItemCount stock="5" initial="1" />
        </ItemListContainer>
      </main>
    </div>
  );
}

export default App;
