import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <img
          src="https://res.cloudinary.com/dcvelgyvu/image/upload/v1739808859/logo-nostalsick-removebg-preview_toueku.png"
          alt=""
          className="navbar-logo-img"
        />
      </Link>
      <ul className="navbar-links">
        <Link to="/" className="navbar-link">
          Todas
        </Link>
        <Link to="/category/remeras" className="navbar-link">
          Remeras
        </Link>
        <Link to="/category/abrigos" className="navbar-link">
          Abrigos
        </Link>
        <Link to="/category/pantalones" className="navbar-link">
          Pantalones
        </Link>
      </ul>
      <Link to="/cart" className="navbar-cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default Navbar;
