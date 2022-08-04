import Footer from "../Footer/Footer";
import Item from "./Item";


const ItemList = ({ items }) => {
    return (
        <div className="App">
            <div className="itemList-container">
                {items.map(item => <Item key={item.id} {...item} />)}
            </div>
            <Footer />
        </div>
    )
}

export default ItemList;
