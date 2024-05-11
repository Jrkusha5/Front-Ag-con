import React, { useState, useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/img/logo1.png';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../redux/cartSlice';
import { authContext } from '../context/AuthContext';

const Header = () => {
  const dispatch = useDispatch();
  const { totalItems } = useSelector((state) => state.cart);
  const {user,role,token}= useContext(authContext);

  useEffect(() => {
    dispatch(getCartTotal());
  }, []);

  const [showMenu, setShowMenu] = useState(false); // Use a descriptive name

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="container-fluid fixed-top pt-4 wow fadeIn" data-wow-delay="0.1s">
      {/* Top bar can be added here if needed */}

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
          aria-expanded={showMenu} // For accessibility
          aria-label="Toggle navigation" // For accessibility
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
            className={`navbar-nav p-4 p-lg-0  animated bounceInDown ${
              !showMenu && 'd-none d-md-flex' // Responsive hiding for medium screens and above
            }`}
          >
            <Link to="/" className="nav-item nav-link active" >
              Home
            </Link>
            
            <Link to="/Products" className="nav-item nav-link" >
              Products
            </Link>
            <Link to="/contactUs" className="nav-item nav-link" >
              Contact
            </Link>
           
          </div>
          <Link to="/login" className="nav-item nav-link justify-content-end " style={{color:'black'}} >
              {/* <span className="fa fa-user" ></span> */}
              Login
            </Link>
            <Link to="/Cart" className="btn-cart btn-md-square btn btn-black bg-white rounded-pill ms-4 d-lg-inline-flex">
              <i className="fa fa-shopping-cart"></i>
              <span className="btn-sm rounded-circle btn-danger d-lg-inline-block">{totalItems}</span>
            </Link>
       
          <div className="d-none d-lg-flex ms-4 justify-content-end">
            {/* <Link to="/" className="btn-sm-square rounded-pill bg-white ms-3">
              <span className="fa fa-search" ></span>
            </Link> */}
            
          
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
