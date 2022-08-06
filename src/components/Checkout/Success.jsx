import "./Success.css";
import { Navigate } from 'react-router-dom';

const Success = (/* { id } */ ) => {

    setTimeout(() => {
        return <Navigate to="/" />
    }, 2000)

    const id = "asodjasjdkh2i313";

    return (
        <div className="successDiv">
            <h1>Éxito ! </h1>
            <p>Gracias por tu compra</p>
            <div className="fondoId">
                <h2>{id}</h2>
            </div>
        </div>
    )
}

export default Success