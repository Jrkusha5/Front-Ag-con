import React from 'react'
import About1 from '../assets/img/blog-2.jpg'
import Price1 from '../assets/img/price .png'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div>
   
    <div class="container-fluid page-header mb-1 wow fadeIn" data-wow-delay="0.2s" style={{fontFamily:'accordion ',fontSize:'30px'}}>
        <div class="container">
            <h1 class="display-3 mb-2 animated slideInDown">About Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item"><a class="text-body" href="#">Home</a></li>
                    <li class="breadcrumb-item text-dark active" aria-current="page">About Us</li>
                </ol>
            </nav>
        </div>
    </div>
    
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.2s" >
                    <div class="about-img position-relative overflow-hidden p-5 pe-0">
                        <img class="img-fluid w-100 rounded-pill" src={About1}/>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{fontSize:'21px',color:'black'}}>
                    <h1 class="display-5 mb-4" style={{fontSize:'50px'}}>Best Organic Fruits And Vegetables</h1>
                    <p class="mb-4"> A user-friendly platform that generates market opportunity for farmers and industry buyers.</p>
                    <p><i class="fa fa-check text-primary me-3"></i>Integrated and secure platform payment processes.</p>
                    <p><i class="fa fa-check text-primary me-3"></i>Transparent and reliable market information, deal creation and negotiation.</p>
                    <p><i class="fa fa-check text-primary me-3"></i>A market with only verified buyers and sellers.</p>
                    <p><i class="fa fa-check text-primary me-3"></i>Unlimited access to a global market from anywhere, at anytime.</p>

                    <Link to='/' class="btn btn-primary rounded-pill py-3 px-5 mt-3" >Read More</Link>
                </div>
            </div>
        </div>
    </div>
   
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
              
            </div>
        </div>
    </div>


    
    <div class="container-fluid bg-light1 bg-icon mt-5 py-6">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-md-7 wow fadeIn" data-wow-delay="0.1s" style={{fontSize:'20px',color:'black'}}>
                    <h1 class="display-5 text-black mb-3">Visit Our Firm</h1>
                    <p class="text-black mb-0">Visiting an agricultural firm is an enriching experience immersed in the heartbeat of the land. As you traverse the sprawling fields or orchards, each step unveils a tapestry of nature's bounty intertwined with human ingenuity. The air is alive with the hum of machinery and the rustle of crops, 
                    while the scent of fertile earth fills your senses.</p>
                </div>
                <div class="col-md-5 text-md-end wow fadeIn" data-wow-delay="0.5s">
                    <Link to='/' class="btn btn-lg btn-primary rounded-pill py-3 px-5" >Visit Now</Link>
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
    

    </div>
  )
}

export default AboutUs