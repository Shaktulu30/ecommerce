import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Inicio</Link>
      <Link to="/cart" className="nav-link">Carrito</Link>
      <Link to="/category/perifericos" className="nav-link">Perifericos</Link>
      <Link to="/category/componentes" className="nav-link">Componentes</Link>
      <Link to="/category/monitores" className="nav-link">Monitores</Link>
      <Link to="/category/almacenamiento" className="nav-link">Almacenamiento</Link>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
