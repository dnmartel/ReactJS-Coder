import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {

    return (
        <>
            <h2>{greeting}</h2>
            <ItemCount stock={10} initial={1} />
        </>
    );
}

export default ItemListContainer;
