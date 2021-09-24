import "./navBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import storeContext from "../context/storeContext";

function NavBar() {
  const cart = useContext(storeContext).cart;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img className="logo" src="/img/logo.png" alt="" />
        <Link className="navbar-brand" to="/">
          Mad Strings
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
          <form className="d-flex text-light">
            <Link className="cart-link btn btn-outline-light me-3" to="/cart">
              <span className="badge bg-primary me-2">{cart.length}</span>
              View Cart
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
