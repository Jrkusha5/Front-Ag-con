import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/login.css'
import Bg1 from '../assets/img/bg.svg'

const Login = () => {
  return (
    <>
      <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.2s">
        <div className="container m">
          <h1 className="display-3 animated slideInDown">Login</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-2">
              <li className="breadcrumb-item">
                <Link to="/" className="text-body">Home</Link>
              </li>
              <li className="breadcrumb-item text-dark active" aria-current="page">Login</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container pt-7" style={{  color: 'black' }}>
        <div className="row justify-content-center">
          <div className="col-md-8 mx-auto">  {/* Center the entire form area */}
            <div className="row">
              <div className="col-md-6 d-flex pt-4 align-items-center">
                <img src={Bg1} alt="Logo" className="login-img" />
              </div>
              <div className="col-md-6">
                <div className="form-container">
                  <h1 className="text-center mb-4">Login</h1>
                  <form>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary btn-lg btn-block rounded-pill">Login</button>
                    </div>
                  </form>
                  <p className="text-center mt-3">
                    Don't have an account? <Link to="/SignUp">Sign up</Link>
                  </p>
                  <div className="text-center social-icons">
                    <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
                    <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
                    <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
