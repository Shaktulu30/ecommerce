import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/cart">Carrito</Link>
            <CartWidget />
        </nav>
    );
}

export default NavBar;