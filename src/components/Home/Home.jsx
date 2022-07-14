import ItemListContainer from "../ItemListContainer/ItemListContainer"
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const Home = () => {
    return (
        <div className="App">
            <main className="App-header">
                <ItemListContainer greeting="Bienvenidos !" />
                <ItemDetailContainer />
            </main>
        </div>
    )
}

export default Home;
