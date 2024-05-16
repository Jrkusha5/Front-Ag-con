import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/img/logo1.png';
import { useSelector } from 'react-redux';
import { getCartTotal } from '../redux/cartSlice'; // Assuming LOGOUT action is defined
import { authContext } from '../context/AuthContext';

const Header = () => {
  const {dispatch} = useContext(authContext);
  const { dropdownMenu, setDropdownMenu } = useState(false);

  const { totalItems } = useSelector((state) => state.cart);
  const { user, role, token } = useContext(authContext);

  useEffect(() => {
    dispatch(getCartTotal());
  }, []);

  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    dispatch({type:'LOGOUT'}); // Assuming LOGOUT action dispatches logout logic
  };

  return (
    <div className="container-fluid fixed-top pt-4 wow fadeIn" data-wow-delay="0.1s">
      <nav
        className={`mt-0 navbar navbar-expand-lg navbar-primary py-lg-0 px-lg-5 wow fadeIn ${
          showMenu ? 'show' : ''
        }`}
        data-wow-delay="0.1s"
      >
        <Link to="/" className="navbar-brand pt-3 ms-4 ms-lg-0">
          <img src={logo1} alt="Your Logo" style={{ width: '300px', height: '120px' }} />
        </Link>
        <button
          onClick={handleToggle}
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          aria-controls="navbarCollapse"
          aria-expanded={showMenu}
          aria-label="Toggle navigation"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div
          className={`collapse navbar-collapse d-flex justify-content-center animated bounceInDown ${
            showMenu ? 'show' : ''
          }`}
          id="navbarCollapse"
          style={{ fontSize: '27px', color: 'black' }}
        >
          <div
            className={`navbar-nav p-4 p-lg-0  animated bounceInDown ${
              !showMenu && 'd-none d-md-flex'
            }`}
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

            
            <button className="btn-cart btn-md-square btn btn-black bg-white rounded-pill ms-4 d-lg-inline-flex">
              {!user ? (
                <span className="fa fa-user"></span>
              ) : (
                <img
                  src={`https://localhost:3000/${user.photo.replace("public", "")}`}
                  alt=""
                  style={{ objectFit: 'cover', borderRadius: '50px' }}
                />
              )}
          </button>
            {dropdownMenu && !user && (
              <div className="nav-link dropdown-menu show"> {/* Added dropdown-menu class */}
                <Link to="/login" className="nav-item nav-link">
                  Login
                </Link>
                <Link to="/Signup" className="nav-item nav-link">
                  Sign Up
                </Link>
              </div>
            )}
            {dropdownMenu && user && (
              <div className="nav-link dropdown-menu show"> {/* Added dropdown-menu class */}
                <Link to="/buyer-profile" className="nav-item nav-link">
                  Profile
                </Link>
                <Link to="/" className="nav-item nav-link">
                  Dashboard
                </Link>
                <Link to="/login" onClick={handleLogout}>
                  Log Out
                </Link>
              </div>
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