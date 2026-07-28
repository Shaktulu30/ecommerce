import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/cart">Carrito</Link>
      <Link to="/category/ropa">Ropa</Link>
      <Link to="/category/calzado">Calzado</Link>
      <Link to="/category/accesorios">Accesorios</Link>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
