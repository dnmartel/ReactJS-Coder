import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {


  return (
    <div className="App">
      <NavBar itemsCarrito={1}/>
      <main className="App-header">
        <ItemListContainer greeting="Bienvenidos al ecommerce" />
      </main>
    </div>
  );
}

export default App;
