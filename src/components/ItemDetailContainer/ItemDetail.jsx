
const ItemDetail = ({ detail }) => {

    if (detail[0] === undefined) {
        return;
    } else

        return (
            <div style={{fontSize: ".5em", margin: 0, outline: "1px solid black"}}>
                <p style={{margin: 0, }}> Item detail</p>
                <p style={{margin: 0, }}> {detail[0].title} </p>
                <p style={{ fontSize: ".5em" }}> Descripcion: {detail[0].description} </p>
                <img src={detail[0].pictureUrl} alt={detail[0].title} width="150px" />
                <h6> Precio: {detail[0].price} </h6>
            </div>
        )
}







export default ItemDetail;