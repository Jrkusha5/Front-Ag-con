import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Register from "../../assets/img/register.png";

const Farmer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: null,
    licenses: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can send formData to your backend
    console.log(formData);
  };
  return (
    <div>
        <div className="container-fluid  mb-3 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <h1 className="display-3 mb-3 animated slideInDown">Farmer</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                {/* <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"></li>
                    <li className="breadcrumb-item text-dark active" aria-current="page"></li>
                </ol> */}
            </nav>
        </div>
    </div>
    
    <Container className="d-flex justify-content-center " style={{fontSize:'20px'}}>
    <div className="col-md-4 ">
              <img src={Register} style={{ width: "100%", height: "100%" }} alt="Logo" className="login-img" />
            </div>
      <Row className="justify-content-center  ">
        <Col md={12} className="bg-white" style={{color:'#36D7B7'}}>
          <Form onSubmit={handleSubmit} className="p-4">
            <h2 className="mb-4">Create Account(Farmer)</h2>
            <Form.Group controlId="firstName" style={{fontSize:'20px'}}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleFileChange}
                accept="image/*"
              />
            </Form.Group>

            <Form.Group controlId="licenses">
              <Form.Label>Licenses</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your licenses"
                name="licenses"
                value={formData.licenses}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary text-center" type="submit">
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Farmer