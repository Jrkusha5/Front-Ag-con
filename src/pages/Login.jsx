import { useContext, useRef, useEffect } from "react";
import { Link,useNavigate } from 'react-router-dom'
import { loginCall } from "../ApiCalls";
import { AuthContext } from '../context/AuthContext';
import '../styles/login.css'
import { BiShow, BiHide } from "react-icons/bi";
import Bg1 from '../assets/img/bg.svg'
import { toast } from "react-toastify";
// import { authContext } from '../context/AuthContext.jsx';
import HashLoader from 'react-spinners/HashLoader'; // Assuming you're using HashLoader for loading indication
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
  //  const [showPassword, setShowPassword] = useState(false);
  //  const [loading, setLoading] = useState(false);
   const email = useRef();
   const password = useRef();
   const { user, isFetching, error, dispatch } = useContext(AuthContext);
   const navigate = useNavigate();
 
   const handleClick = (e) => {
     e.preventDefault();
     loginCall({ email: email.current.value, password: password.current.value }, dispatch);
   };
 
   useEffect(() => {
     if (error) {
       toast.error('Login failed. Please check your credentials and try again.');
     }
   }, [error]);
 
   useEffect(() => {
     if (user) {
       navigate('/');
       console.log(user._id)
     }
   }, [user, navigate]);
 
   const handleRegister = () => {
     navigate('/Signup');
   };
  return (
    <>
    <Header/>
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
              <div className="container">
  
  <div className="row justify-content-center">
    <div className="col-md-6 col-lg-4">
      <form className="card card-body" onSubmit={handleClick}>
        <label className="form-label">Email</label>
        <input placeholder="Enter your email" type="email" className="form-control" ref={email} required />
        <label className="form-label">Password</label>
        <input
          placeholder="Enter your password"
          type="password"
          className="form-control"
          minLength="6"
          ref={password}
          required
        />
        <button className="btn btn-primary" type="submit">
          {isFetching ? <HashLoader color={'#fff'} size={20} loading={isFetching} /> : 'Log In'}
        </button>
        <span className="form-text text-muted">Forgot Password?</span>
        <button type="button" className="btn btn-link" onClick={handleRegister}>
          {isFetching ? <HashLoader color={'#fff'} size={20} loading={isFetching} /> : 'Create a New Account'}
        </button>
      </form>
    </div>
  </div>
</div>



            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
;
