import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ContactUs = () => {
  return (
    <div>
        <Header/>
       
    <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s" style={{fontSize:'23px'}}>
        <div className="container">
            <h2 className="display-3 mb-3 animated slideInDown">Contact </h2>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a className="text-body" href="#">Home</a></li>
                    
                    <li className="breadcrumb-item text-dark active" aria-current="page">Contact Us</li>
                </ol>
            </nav>
        </div>
    </div>
   
    <div className="container-xxl py-6">
        <div className="container mt-2">
            <div className="section-header text-center mx-auto mb-3 wow fadeInUp" data-wow-delay="0.1s"  style={{maxWidth: '500px',fontSize:'22px'}}>
                <h1 className="display-5 mb-3">Contact Us</h1>
                <p className='text-dark' >Got a technical issue? Want to send feedback about the site let 
          us Know.</p>
            </div>
            <div className="row g-5 justify-content-center">
                <div className="col-lg-5 col-md-12 wow fadeInUp" data-wow-delay="0.1s" style={{fontSize:'20px'}}>
                    <div className="bg-primary text-white d-flex flex-column justify-content-center h-100 p-5">
                        <h5 className="text-white" style={{fontSize:'18px'}}>Call Us</h5>
                        <p className="mb-5 text-dark"><i className="fa fa-phone-alt me-3"></i>+0939063697</p>
                        <h5 className="text-white" style={{fontSize:'18px'}}>Email Us</h5>
                        <p className="mb-5 text-dark"><i className="fa fa-envelope me-3"></i>AgroCon@gmail.com</p>
                        <h5 className="text-white" style={{fontSize:'18px'}}>Office Address</h5>
                        <p className="mb-5 text-dark"><i className="fa fa-map-marker-alt me-3"></i>Arbaminch,Ethiopia</p>
                        <h5 className="text-white" style={{fontSize:'18px'}}>Follow Us</h5>
                        <div className="d-flex pt-2 g-4">
                            <a className="btn btn-square btn-outline-light rounded-circle me-1" ><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square btn-outline-light rounded-circle me-1" ><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square btn-outline-light rounded-circle me-0" ><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                    <label for="name" style={{fontSize:'18px'}}>Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                    <label for="email" style={{fontSize:'18px'}}>Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                    <label for="subject" style={{fontSize:'18px'}}>Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: '200px'}} ></textarea>
                                    <label for="message" style={{fontSize:'18px'}}>Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary rounded-pill py-3 px-5" type="submit"
                                style={{fontSize:'18px'}}>Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
   
    <Footer/>
    </div>
  )
}

export default ContactUs