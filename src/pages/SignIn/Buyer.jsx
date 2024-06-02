import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BiShow, BiHide } from "react-icons/bi";
import { BsArrowLeft } from 'react-icons/bs';
// import Images from "../../assets/img/images.png";
import Dowload from "../../assets/img/download.png";
import HashLoader from 'react-spinners/HashLoader'; // Assuming you're using HashLoader for loading indication
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Buyer = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "buyer",
    photo: "", // Default role is set to buyer
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (name === "photo") { // Handle photo upload separately
      const uploadedFile = e.target.files[0];
      setData({ ...data, photo: uploadedFile }); // Store the uploaded file object
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading indicator

    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }

      const response = await fetch("http://localhost:3000/api/v1/auth/buyer/register", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message); // Re-throw for error handling
      }

      const responseData = await response.json(); // Parse successful response
      setLoading(false); // Hide loading indicator
      toast.success(responseData.message);
      navigate("/login"); // Redirect to login page on success
    } catch (error) {
      setLoading(false); // Hide loading indicator in case of error
      toast.error(error.message);
    }
  };

  
  return (
    <>
    <Header/>
    <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.2s" style={{ fontSize: '20px' }}>
        <div className="container">
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
      
      <div className="col-md-4">
        <Link className="btn btn-success btn-lg btn-block mt-4 rounded-pill" to='/Signup'>
          <BsArrowLeft />
        </Link>
      </div>
      <div className="container py-3">
        <h2 className="text-center" style={{ fontWeight: "bold", fontSize: "2rem" }}>SignUp</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 d-flex g-1">
            {/* <div className="col-md-6">
              <img src={Images} style={{ width: "90%", height: "100%" }} alt="Logo" className="login-img" />
            </div> */}
            <div className="card bg-white p-4 shadow" >
              <form className="py-2" onSubmit={handleSubmit} style={{ color: "black" }}>
                <label htmlFor="file-upload" className="d-flex flex-column align-items-center">
                  <img src={Dowload} className="rounded-pill mx-auto mb-2" alt="" />
                  <span >Profile picture</span>
                </label>
                <input
                  type="file" // Specify file input type
                  id="file-upload"
                  label='Image'
                  name="photo"
                  className="hidden" accept='.jpeg .png .jpg'
                  onChange={handleOnChange}
                />
                <div className="form-group mb-3">
                  <label htmlFor="name" >Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={data.name}
                    onChange={handleOnChange}
                    required // Add validation for required fields
                    
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={data.email}
                    onChange={handleOnChange}
                    required // Add validation for required fields
                   
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="password" >Password</label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className="form-control"
                      value={data.password}
                      onChange={handleOnChange}
                      required // Add validation for required fields
                      minLength={8} // Enforce minimum password length
                      
                    />
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      onClick={handleShowPassword}
                     
                    >
                      {showPassword ? "Hide" : <BiHide />}
                    </button>
                  </div>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="input-group">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      className="form-control"
                      value={data.confirmPassword}
                      onChange={handleOnChange}
                      required // Add validation for required fields
                    
                    />
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      onClick={handleShowConfirmPassword}
                     
                    >
                      {showConfirmPassword ? <BiShow /> : <BiHide />}
                    </button>
                  </div>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="phone" >Phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="form-control"
                    value={data.phone}
                    onChange={handleOnChange}
                    required 
                    
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="address" >Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="form-control"
                    value={data.address}
                    onChange={handleOnChange}
                    required // Add validation for required fields
                    
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="role" >Role</label>
                  <select
                    id="role"
                    name="role"
                    className="form-select"
                    value={data.role}
                    onChange={handleOnChange}
                    disabled // Disable role selection for simplicity (adjust as needed)
                   
                  >
                    <option value="buyer">Buyer</option>
                  </select>
                </div>

                <div className="text-center rounded-pill">
                  {loading ? (
                    <HashLoader color={'#36D7B7'} loading={loading} size={50} />
                  ) : (
                    <button className="btn btn-primary btn-block rounded-pill" >
                      SignUp
                    </button>
                  )}
                </div>
              </form>
              <p className="text-left mt-3" style={{ color: "black" }}>
                Already have an account?{" "}
                <Link to={"/login"} className="text-primary" style={{ fontWeight: "bold" }}>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Buyer;
