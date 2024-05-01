import React,{useState} from 'react'

const Logistics = () => {
  // State variables for form fields
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation and submission logic here
    console.log('Form submitted!');
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
    <h2 className='text-center mb-4' style={{fontFamily:''}}> Sign Up</h2>
    <div className="container w-25 bg-white justify-content-center">
      
      <form onSubmit={handleSubmit}  >
        <div className="mb-3" style={{color:"black", fontFamily:''}}>
          <label htmlFor="companyName" className="form-label" style={{color:"black", fontFamily:''}}>Company Name:</label>
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
        <button type="submit" className="btn btn-primary text-center">Sign Up</button>
      </form>
    </div>
    </div>
  )
}

export default Logistics