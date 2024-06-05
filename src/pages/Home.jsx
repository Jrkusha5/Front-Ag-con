import React from 'react'
import Carousel1 from '../assets/img/carousel-1.jpg'
import Carousel2 from '../assets/img/carousel-2.jpg'
import Green from '../assets/img/green-1.webp'
import Price1 from '../assets/img/green-2.webp'
import Trust from '../assets/img/trust.png'
import Trading from '../assets/img/trading.png'
import Check from '../assets/img/check.png'
import Transport from '../assets/img/import.png'
import {Link} from 'react-router-dom'
import Services from '../services/Services'
import Header from '../components/Header'
import Footer from '../components/Footer' 
import Latest from '../components/Latest'
import Marquee from '../components/mark/Marquee'

const Home = () => {
  return (
    <div>
      <Header/>
    
    <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s" >
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={Carousel1} alt="Image"/>
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-lg-7">
                                    <h5 className="display-2 mb-5 animated slideInDown" style={{fontSize: '3.5rem'}}>OnE ገበያ where Fair trade made Easy.</h5>
                                    <Link to='/products' className="btn btn-primary  py-sm-3 px-sm-5" style={{borderRadius:'50px',fontSize:'18px',color:'black'}}>Products</Link>
                                    <Link to ='/contactUs'  className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3"style={{borderRadius:'50px',fontSize:'18px',color:'black'}}>Services</Link>
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
                                    <h5 className="display-2 mb-5 animated bounceInDown" style={{fontSize: '3.5rem'}}>Organic Products Are Always Healthy</h5>
                                    <Link to='/products' className="btn btn-primary rounded-pill py-sm-3 px-sm-5" style={{borderRadius:'50px',fontSize:'17px',color:'black'}}>Products</Link >
                                    <Link to='/contactUs' className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3" style={{borderRadius:'50px',fontSize:'17px',color:'black'}}>Contact Us</Link>
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
    
    <div className="container-xxl py-5" style={{fontSize:'17px',color:'black'}}>
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="about-img position-relative overflow-hidden p-5 pe-0">
                        <img className="img-fluid w-100 rounded-pill" src={Green}/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 className="display-5 mb-4" style={{fontSize:'30px'}}>Best Organic Fruits And Vegetables</h1>
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
    
    
    <div className="container-fluid bg-light1 bg-icon mt-5 py-6">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-md-7 wow fadeIn" data-wow-delay="0.1s">
                    <h1 className="display-5 text-black mb-3" style={{fontSize:'30px'}}>Overview</h1>
                    <p className="text-black mb-0" style={{fontSize:'17px',color:'black'}}>Our mission is to Provide customers with access to nutritions food that is free from genetically modified ingridients.
                       We work with local farmers who share our commitment to Organic agriculture, and we carefully select every product that we selll to ensure that it meets our high quality standards</p>
                </div>
                <div className='col-md-4'>
                    <img src={Price1} style={{width:'500px'}} alt="" />
                </div>
              
            </div>
        </div>
    </div>

    <div class="container-fluid bg-light bg-icon py-6">
        <div class="container">
            <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s"  style={{maxWidth: '500px',fontSize:'20px'}}>
                <h1 class="display-5 mb-3">Our Features</h1>
                <p style={{color:'black'}}></p>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" >
                    <div class="bg-white text-center h-100 p-4 p-xl-5">
                        <img class="img-fluid mb-4" src="assets/img/icon-1.png" alt=""/>
                        <h4 class="mb-3" style={{fontSize:'22px'}}>Natural Process</h4>
                        <p class="mb-4" style={{fontSize:'18px',color:'black'}}>Preserving the integrity of the land and delivering food that is as close to nature as it gets.</p>
                        <Link to='/' class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</Link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s" >
                    <div class="bg-white text-center h-100 p-4 p-xl-5">
                        <img class="img-fluid mb-4" src="assets/img/icon-2.png" alt=""/>
                        <h4 class="mb-3" style={{fontSize:'22px'}}>Organic Products</h4>
                        <p class="mb-4" style={{fontSize:'18px',color:'black'}}>Free from synthetic pesticides and fertilizers, ensuring the purest, most wholesome produce for our customers</p>
                        <Link to='/' class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" style={{fontSize:'18px'}}>Read More</Link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="bg-white text-center h-100 p-4 p-xl-5">
                        <img class="img-fluid mb-4" src="assets/img/icon-3.png" alt=""/>
                        <h4 class="mb-3" style={{fontSize:'22px'}}>Biologically Safe</h4>
                        <p class="mb-4" style={{fontSize:'18px',color:'black'}}>We prioritize the health and well-being of both consumers and the environment</p>
                        <Link to='/' class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" >Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='mb-5'>
    <Marquee/>
    </div>
    

    <div className='container-features'>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h1 className='text-center'>
          KEY FEATURES
        </h1>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <p className='text-center features-text' style={{ color: 'black', fontSize: '20px' }}>
          "Discover how One ገበታ can benefit you and all other food supply chain actors"
        </p>
      </div>
    </div>
    <div className="features-row d-flex flex-wrap justify-content-center align-items-center" style={{ fontSize: '17px', color: 'black' }}>
      <div className="col-md-3 col-adv">
        <div className="container">
          <img src={Trust} style={{ width: '150px' }} alt="" />
        </div>
        <p className="container-features__subtitle" style={{ fontWeight: 'bold', fontSize: '20px' }}>Transparency</p>
        <p className="container-features__text">Direct transaction between farmers and buyers/retail</p>
      </div>
      <div className="col-md-3 col-adv">
        <div className="container">
          <img src={Trading} style={{ width: '150px' }} alt="" />
        </div>
        <p className="container-features__subtitle" style={{ fontWeight: 'bold', fontSize: '20px' }}>FairTrade</p>
        <p className="container-features__text">Redistribution of value in food supply chain</p>
      </div>
      <div className="col-md-3 col-adv">
        <div className="container">
          <img src={Check} style={{ width: '150px' }} alt="" />
        </div>
        <p className="container-features__subtitle" style={{ fontWeight: 'bold', fontSize: '20px' }}>UserFriendly</p>
        <p className="container-features__text">Reduce costs to buyers without losing reliability</p>
      </div>
      <div className="col-md-3 col-adv">
        <div className="container">
          <img src={Transport} style={{ width: '150px' }} alt="" />
        </div>
        <p className="container-features__subtitle" style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>Logistic</p>
        <p className="container-features__text">Direct transaction between farmers and industry/retail</p>
      </div>
    </div>
  </div>
</div>

   

   <Footer/>
    
    </div>
    
  )
}

export default Home