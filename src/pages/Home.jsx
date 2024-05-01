import React from 'react'
import Carousel1 from '../assets/img/carousel-1.jpg'
import Carousel2 from '../assets/img/carousel-2.jpg'
import About2 from '../assets/img/about2.jpg'
import Price1 from '../assets/img/price .png'
import Trust from '../assets/img/trust.png'
import Trading from '../assets/img/trading.png'
import Check from '../assets/img/check.png'
import Transport from '../assets/img/import.png'
import {Link} from 'react-router-dom'
import Services from '../services/Services'

import Latest from '../components/Latest'


const Home = () => {
  return (
    <div>
      
    
    <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s" >
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={Carousel1} alt="Image"/>
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-lg-7">
                                    <h1 className="display-2 mb-5 animated slideInDown" style={{fontFamily:''}} >OnE ገበያ where Fair trade made Easy.</h1>
                                    <Link to='/products' className="btn btn-primary  py-sm-3 px-sm-5" style={{borderRadius:'50px',fontFamily:'inherit',fontSize:'23px',color:'black'}}>Products</Link>
                                    <Link to ='/contactUs'  className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3"style={{borderRadius:'50px',fontFamily:'inherit',fontSize:'23px',color:'black'}}>Services</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src={Carousel2} alt="Image"/>
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-lg-7">
                                    <h1 className="display-2 mb-5 animated bounceInDown" style={{fontFamily:''}}>Organic Products Are Always Healthy</h1>
                                    <Link to='/products' className="btn btn-primary rounded-pill py-sm-3 px-sm-5" style={{borderRadius:'50px',fontFamily:'inherit',fontSize:'23px',color:'black'}}>Products</Link >
                                    <Link to='/contactUs' className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3" style={{borderRadius:'50px',fontFamily:'inherit',fontSize:'23px',color:'black'}}>Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>

   <Services/>
    
    <div className="container-xxl py-5" style={{fontFamily:'',fontSize:'23px',color:'black'}}>
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="about-img position-relative overflow-hidden p-5 pe-0">
                        <img className="img-fluid w-100 rounded-pill" src={About2}/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 className="display-5 mb-4" style={{fontFamily:'',fontSize:'50px'}}>Best Organic Fruits And Vegetables</h1>
                    <p className="mb-4">Transparent and reliable market information, deal creation and negotiation.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Trusted Organic Food</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Tasty And Healthier Organic Vegetables</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Integrated and secure platform payment processes.</p>
                    <Link to='/aboutUs' className="btn btn-primary rounded-pill py-3 px-5 mt-3">Read More</Link>
                </div>
            </div>
        </div>
    </div>
    
     <Latest/>
    {/* <Testimonials/> */}
    <div className="container-fluid bg-light1 bg-icon mt-5 py-6">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-md-7 wow fadeIn" data-wow-delay="0.1s">
                    <h1 className="display-5 text-black mb-3" style={{fontSize:'50px'}}>Pricing</h1>
                    <p className="text-black mb-0" style={{fontSize:'25px',color:'black'}}>Both buyer and seller pay a small fee to Agri Marketplace once a transaction is made. We price transparently and keep you updated through all steps of the process. Our pricing is based on your transaction’s value & volume</p>
                </div>
                <div className='col-md-4'>
                    <img src={Price1} style={{width:'500px'}} alt="" />
                </div>
                {/* <div className="col-md-5 text-md-end wow fadeIn" data-wow-delay="0.5s">
                    <a className="btn btn-lg btn-secondary rounded-pill py-3 px-5" href="">Visit Now</a>
                </div> */}
            </div>
        </div>
    </div>

    <div className='container-features'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className='text-center'>
                        KEY <green>FEATURES</green>
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p className='text-center features-text' style={{color:'black', fontSize:'25px'}}>
                        "Discover how One ገበታ can benefit you and all other
                        food supply chain actors"
                    </p>
                </div>
            </div>
            <div className="text-center features-row" style={{display: 'flex',fontSize:'20px',color:'black'}}>
                <div className="col-md-3 col-adv">
                    <div className="container">
                        <img src={Trust} style={{width:'200px'}} alt="" />
                    </div>
                    <p className="container-features__subtitle" style={{fontWeight:'bold',fontSize:'25px'}}>Transparency</p>
                    <p className="container-features__text">Direct transaction between farmers and industry/retail</p>
                </div>
                <div className="col-md-3 col-adv">
                    <div className="container">
                        <img src={Trading} style={{width:'200px'}} alt="" />
                    </div>
                    <p className="container-features__subtitle"  style={{fontWeight:'bold',fontSize:'25px'}}>FairTrade</p>
                    <p className="container-features__text">Redistribution of value in food supply chain</p>
                </div>
                <div className="col-md-3 col-adv">
                    <div className="container">
                        <img src={Check} style={{width:'200px'}} alt="" />
                    </div>
                    <p className="container-features__subtitle"  style={{fontWeight:'bold',fontSize:'25px'}}>UserFriendly</p>
                    <p className="container-features__text">Reduce costs to buyers without losing reliability</p>
                </div>
                <div className="col-md-3 col-adv">
                    <div className="container">
                        <img src={Transport} style={{width:'200px'}} alt="" />
                    </div>
                    <p className="container-features__subtitle" style={{fontSize:'25px',color:'black',fontWeight:'bold'}}>Logistic</p>
                    <p className="container-features__text">Direct transaction between farmers and industry/retail</p>
                </div>
                
            </div>
            
            
        </div>
    </div>
   

   
    
    </div>
    
  )
}

export default Home