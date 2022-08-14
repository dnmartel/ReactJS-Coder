import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Success.css";

const Success = ({ id }) => {

    const imgSuccess = {
        "1": "https://res.cloudinary.com/dth4axit0/image/upload/v1660500869/success_0_1.gif",
        "2": "https://res.cloudinary.com/dth4axit0/image/upload/v1660500868/success_0_2.gif",
        "3": "https://res.cloudinary.com/dth4axit0/image/upload/v1660500869/success_0_3.gif",
        "4": "https://res.cloudinary.com/dth4axit0/image/upload/v1660500868/success_0_4.gif",
        "5": "https://res.cloudinary.com/dth4axit0/image/upload/v1660500868/success_0_5.gif"
    }


    return (
        <div className="successDiv">
            <h1>Operación exitosa ! </h1>
            <img src={imgSuccess[(Math.floor(Math.random() * 5) + 1)]} alt="successImage" width="250px" />
            <p>Gracias por tu compra</p>
            <div className="fondoId">
                <h2>{id}</h2>
            </div>
            <Link to="/"> <Button variant="contained">Volver al inicio</Button></Link>
        </div>

    )
}

export default Success