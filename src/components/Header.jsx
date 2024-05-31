import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo1 from '../assets/img/logo1.png';
import { useSelector, useDispatch } from 'react-redux';
import { getCartTotal } from '../redux/cartSlice';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext); // Destructure logout from AuthContext
  const dispatch = useDispatch();
  const { totalItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const [showMenu, setShowMenu] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
    navigate('/'); // Navigate to the home page
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
          <div className={`navbar-nav p-4 p-lg-0 animated bounceInDown ${!showMenu && 'd-none d-md-flex'}`}>
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/Products" className="nav-item nav-link">
              Products
            </Link>
            <Link to="/contactUs" className="nav-item nav-link">
              Contact
            </Link>
            {!user && (
              <Link to="/login" className="nav-item nav-link">
                Login
              </Link>
            )}
          </div>

          <Link to="/Cart" className="btn-cart btn-md-square btn btn-black bg-white rounded-pill ms-4 d-lg-inline-flex">
            <i className="fa fa-shopping-cart"></i>
            <span className="btn-sm rounded-circle btn-danger d-lg-inline-block">{totalItems}</span>
          </Link>
          {user && (
            <div className="profileMenu ms-4 d-flex align-items-center position-relative">
              <img 
                src='https://i.ibb.co/4pDNDk1/avatar.png' 
                alt="" 
                className="topbarImg" 
                onClick={toggleDropdown}
                style={{ cursor: 'pointer', width: '40px', height: '40px', borderRadius: '50%' }}
              />
              {dropdownVisible && (
                <div className="dropdownMenu position-absolute mt-2" style={{ top: '100%', right: 0, background: 'white', border: '1px solid #ccc', borderRadius: '5px', zIndex: 1000 }}>
                  <Link to={`/setting/${user._id}`} className="dropdownItem" style={{ display: 'block', padding: '10px' }}>Profile</Link>
                  <Link to='/productlist' className="dropdownItem" style={{ display: 'block', padding: '10px' }}>Dashboard</Link>
                  <span className="dropdownItem" onClick={handleLogout} style={{ display: 'block', padding: '10px', cursor: 'pointer' }}>LogOut</span>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
