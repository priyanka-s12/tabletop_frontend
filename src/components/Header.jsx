import { NavLink, Link } from 'react-router-dom';
import useMenu from '../context/MenuContext';

function Header() {
  const { cartItems } = useMenu();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        {' '}
        <div className="container">
          <Link className="navbar-brand fw-semibold text-primary" to="/">
            TableTop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to={`/order?table=4`} className="nav-link active">
                  Order
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Cart {cartItems.length}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
