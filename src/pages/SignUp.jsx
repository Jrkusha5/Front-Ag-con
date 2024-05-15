import React from 'react'

import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
    
    <div>
         <div className="container-fluid  mb-3 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <h1 className="display-3 mb-3 animated slideInDown">SignUp</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a className="text-body" >Home</a></li>
                    <li className="breadcrumb-item text-dark active" aria-current="page">SignUp</li>
                </ol>
            </nav>
        </div>
    </div>
    </div>

    <div className="container">
    <h2 className="text-center mb-4">Welcome to One ገበያ</h2>
    <h4 className="text-center">Before you start, please tell us who you are:</h4>
    <div className="row justify-content-center mt-4">
      <div className="col-md-4">
        <div className="card mb-3">
          <div className="card-body text-center">
            <h5 className="card-title">🌾Farmer</h5>
            <Link to='/signUpFarmer' className="btn btn-primary rounded-pill btn-lg btn-block">Select</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-3">
          <div className="card-body text-center">
            <h5 className="card-title">🛒Buyer</h5>
            <Link to='/signUpBuyer' className="btn btn-primary rounded-pill btn-lg btn-block">Select</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-3">
          <div className="card-body text-center">
            <h5 className="card-title">🚚Logistic</h5>
            <Link to='/signUpLogistics' className="btn btn-primary rounded-pill btn-lg btn-block">Select</Link>

          </div>
        </div>
      </div>
    </div>
    <Link to='/login' className="btn btn-success btn-lg btn-block mt-4 rounded-pill">Back to Login</Link>
    <p className="text-center mt-3">By clicking "Continue", you agree to our Terms of Service and <a href="#">Privacy Policy</a>.</p>
  </div>
    </div>

    
  )
}

export default SignUp