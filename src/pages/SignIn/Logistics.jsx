import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BiShow, BiHide } from "react-icons/bi";

const Logistics = () => {
  // State variables for form fields
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "logistics", // Default role is set to buyer
  });
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading indicator

    try {
      const response = await fetch("http://localhost:3000/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
    <div>
      <div className="container-fluid  mb-3 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <h1 className="display-3 mb-3 animated slideInDown">Logistics</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item text-dark active" aria-current="page">SignUp</li>
                </ol>
            </nav>
        </div>
    </div>
    <h2 className='text-center mb-4' style={{}}> Sign Up</h2>
    <div className="container w-25 bg-white justify-content-center">
      
      <form onSubmit={handleSubmit}  >
        <div className="mb-3" style={{color:"black", }}>
          <label htmlFor="companyName" className="form-label" style={{color:"black", }}>Company Name:</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <label htmlFor="role">Role</label>
                <select
                  id="role"
                  name="role"
                  className="form-select mb-2"
                  value={data.role}
                  onChange={handleOnChange}
                  disabled // Disable role selection for simplicity (adjust as needed)
                >
                  <option value="transportation">Transportation</option>
                </select>
        <button type="submit" className="btn btn-primary text-center">Sign Up</button>
      </form>
    </div>
    </div>
  )
}

export default Logistics