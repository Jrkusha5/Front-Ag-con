import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
// import axios from 'axios';
import { BASE_URL } from '../../config';
import {toast} from 'react-toastify'
import Register from "../../assets/img/register.png";
import HashLoader from 'react-spinners/HashLoader'


const Buyer = () => {
  const [data, setData] = useState({
    Name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "buyer", // Default role is set to buyer
  });
  const [loading, setLoading]=useState(false)
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res= await fetch(`${BASE_URL}/auth/register`,{
        method:'post',
        headers:{
          'Content-Type':' application/json'
        },
        body :JSON.stringify(data)
  
      })
      const {message} =await res.json()
  
      if(!res.ok){
        throw new Error(message)
      }
      setLoading(false)
      toast.success(message)
      navigate('/login')
  
      } catch(err){
        toast.error(err.message)
        setLoading(false)
  
  
     }
     
    
  };

  return (
    <div>
      <div className="container-fluid  mb-3 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <h1 className="display-3 mb-3 animated slideInDown">Buyer</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a className="text-body">Home</a>
              </li>
              <li
                className="breadcrumb-item text-dark active"
                aria-current="page"
              >
                SignUp
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container w-100 py-3 " >
        <h2 className="text-center">SignUp</h2>
        <div className="row justify-content-center" >
          <div className="col-12 col-md-6 d-flex g-1  ">
            <div class="col-md-6 ">
              <img src={Register} style={{width:"90%",height:'100%'}} alt="Logo" class="login-img" />
            </div>
            <div className="card bg-white p-4">
              <form className="py-2" onSubmit={handleSubmit} style={{color:"black", fontFamily:''}}>
                <label htmlFor="Name">Name</label>
                <input
                  type={"text"}
                  id="Name"
                  name="Name"
                  className="form-control mb-2 border-2"
                  value={data.Name}
                  onChange={handleOnChange}
                />

                

                <label htmlFor="email">Email</label>
                <input
                  type={"email"}
                  id="email"
                  name="email"
                  className="form-control mb-2"
                  value={data.email}
                  onChange={handleOnChange}
                />

                <label htmlFor="password">Password</label>
                <div className="input-group mb-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="form-control"
                    value={data.password}
                    onChange={handleOnChange}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? "Show" : "Hide"}
                  </button>
                </div>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="input-group mb-2">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    className="form-control"
                    value={data.confirmPassword}
                    onChange={handleOnChange}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={handleShowConfirmPassword}
                  >
                    {showConfirmPassword ? "Show" : "Hide"}
                  </button>
                </div>

                <label htmlFor="role">Role</label>
                <select
                  id="role"
                  name="role"
                  className="form-select mb-2"
                  value={data.role}
                  onChange={handleOnChange}
                >
                 <option value="buyer">Buyer</option>
                </select>

                <div className="text-center rounded-pill">
                  <button className="btn btn-primary btn-block">Sign up</button>
                </div>
              </form>
              <p className="text-left mt-2" style={{color:"black", fontFamily:''}}>
                Already have an account ?{" "}
                <Link to={"/login"} className="text-primary">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buyer;
