import React, {useState,useContext} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import '../styles/login.css'
import { BiShow, BiHide } from "react-icons/bi";
import Bg1 from '../assets/img/bg.svg'
import { toast } from "react-toastify";
import { authContext } from '../context/AuthContext.jsx';

import HashLoader from 'react-spinners/HashLoader'; // Assuming you're using HashLoader for loading indication

const Login = () => {
   const [showPassword, setShowPassword] = useState(false);
   const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()  
  const {dispatch}= useContext(authContext)
  
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleOnChange = (e)=>{
    const {name,value} = e.target
    setData((preve)=>{
        return{
            ...preve,
            [name] : value
        }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading indicator

    try {
      const response = await fetch("http://localhost:3000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const  result  = await response.json();
      if (!response.ok) {
        
        throw new Error(result.message); // Re-throw for error handling
      }
      
      dispatch({
        type:'LOGIN_SUCCESS',
        payload:{
          user:result.data,
          token:result.token,
          role:result.role,
        },
      });
      //  console.log(result,'login Data');
      setLoading(false); // Hide loading indicator
      toast.success(result.message);
      navigate("/"); // Redirect to login page on success
    } catch (error) {
      setLoading(false); // Hide loading indicator in case of error
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.2s" style={{fontSize:'20px'}}>
        <div className="container ">
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
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Email address</label>
                      <input 
                      type={"email"} 
                      name="email"
                      id="email"
                      className="form-control"  
                      aria-describedby="emailHelp" placeholder="Enter email"
                      value={data.email}
                  onChange={handleOnChange} />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">Password</label>
                      <input  
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className="form-control" 
                       placeholder="Password" 
                       value={data.password}
                      onChange={handleOnChange}
                       />
                       <span
            className=""
            onClick={handleShowPassword}
          >
            {showPassword ? <BiShow /> : <BiHide />}
          </span>
                    </div>
                    <div className="text-center">
                    {loading ? (
                    <HashLoader color={'#36D7B7'} loading={loading} size={50} />
                  ) : (
                      <button type="submit" className="btn btn-primary btn-lg btn-block rounded-pill">Login</button>
                    )}
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
