import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo1 from '../assets/img/logo1.png';
import { useSelector, useDispatch } from 'react-redux';
import { getCartTotal } from '../redux/cartSlice';
import { authContext } from '../context/AuthContext';

const Header = () => {
  const dispatch = useDispatch();
  const { totalItems } = useSelector((state) => state.cart);
  const { role, token, user } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="container-fluid fixed-top pt-4 wow fadeIn" data-wow-delay="0.1s">
      <nav
        className={`mt-0 navbar navbar-expand-lg navbar-primary py-lg-0 px-lg-5 wow fadeIn ${showMenu ? 'show' : ''}`}
        data-wow-delay="0.1s"
      >
        <Link to="/" className="navbar-brand pt-3 ms-4 ms-lg-0">
          <img src={logo1} alt="Your Logo" style={{ width: '300px', height: '120px' }} />
        </Link>
        <button
          onClick={handleToggle}
          type="button"
          className="navbar-toggler me-4"
          aria-controls="navbarCollapse"
          aria-expanded={showMenu ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div
          className={`collapse navbar-collapse d-flex justify-content-center animated bounceInDown ${showMenu ? 'show' : ''}`}
          id="navbarCollapse"
          style={{ fontSize: '27px', color: 'black' }}
        >
          <div
            className={`navbar-nav p-4 p-lg-0 animated bounceInDown ${!showMenu && 'd-none d-md-flex'}`}
          >
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/Products" className="nav-item nav-link">
              Products
            </Link>
            <Link to="/contactUs" className="nav-item nav-link">
              Contact
            </Link>
            {token && user ? (
              <div className="nav-item nav-link dropdown dropdown-end">
                <button
                  type="button"
                  className="btn btn-light rounded-pill dropdown-toggle fs-5"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={user.photo || "https://i.ibb.co/4pDNDk1/avatar.png"} alt="Profile Picture" width="40" height="40" />
                </button>
                <ul className="dropdown-menu mt-3 shadow-sm rounded-4 w-auto fs-5 fw-bold">
                  <li>
                    <Link className="dropdown-item d-flex justify-content-between" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/settings">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : null}
            {/* {token && user ? (
              <Link to="/dashboard" className="nav-item nav-link">
                Dashboard
              </Link>
            ) : null} */}
            {!token && (
              <Link to="/login" className="nav-item nav-link">
                Login
              </Link>
            )}
          </div>

          <Link to="/Cart" className="btn-cart btn-md-square btn btn-black bg-white rounded-pill ms-4 d-lg-inline-flex">
            <i className="fa fa-shopping-cart"></i>
            <span className="btn-sm rounded-circle btn-danger d-lg-inline-block">{totalItems}</span>
          </Link>
          <div className="d-none d-lg-flex ms-4 justify-content-end"></div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
