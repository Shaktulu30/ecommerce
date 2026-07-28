import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Inicio</Link>
      <Link to="/cart" className="nav-link">Carrito</Link>
      <Link to="/category/ropa" className="nav-link">Ropa</Link>
      <Link to="/category/calzado" className="nav-link">Calzado</Link>
      <Link to="/category/accesorios" className="nav-link">Accesorios</Link>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
