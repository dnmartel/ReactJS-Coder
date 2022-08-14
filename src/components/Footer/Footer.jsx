import { Link } from "react-router-dom"
import { Button } from "@mui/material";
import "./Footer.css";

const Footer = () => {

    return (
        <>
            <nav className="Footer"  >
                <Button onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}>INICIO</Button>

                <Link to="/">
                    <img src="https://res.cloudinary.com/dth4axit0/image/upload/v1658892662/3786_gqjlbe.png" alt="Logo" />
                </Link>

            </nav>
        </>
    )
}

export default Footer;