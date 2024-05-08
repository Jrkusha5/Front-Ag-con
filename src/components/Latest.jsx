import React, { useState } from 'react'
import CommonHeading from './CommonHeading'
import recentData  from '../assets/data/recentData'
import Star from '../assets/img/Star.png'



const Latest = () => {
    const [product, setProduct]=useState(recentData);

    const filterItems= (category)=>{
        const recentData =recentData.filter((item)=>item.category==category);
        setProduct(product);
        if(category ==='all'){
            setProduct(recentData);
        }
    }
  return (
   <>
   <div className="container-fluid event py-6">
     <div className="container">
        <CommonHeading title="Latest Products" description="Keep Your health with Organic foods."/>
        <div className="tab-className text-center">
            <ul className='nav nav-pills d-inline-flex justify-content-center mb-5 bounceInUp'>
            <li className="nav-items p-2">
                    <a href="" className='d-flex mx-2 py-2 border border-primary text-uppercase  bg-light rounded-pill'>
                        <span className="text-dark" style={{width:'150px',fontSize:"20px",color:'black'}}>
                            All Items
                        </span>
                    </a>
                </li>
                <li className="nav-items p-2">
                    <a href="" className='d-flex mx-2 py-2 border border-primary text-uppercase  bg-light rounded-pill'>
                        <span className="text-dark" style={{width:'150px', fontSize:"20px",color:'black'}}>
                            Grains
                        </span>
                    </a>
                </li>
                <li className="nav-items p-2">
                    <a href="" className='d-flex mx-2 py-2 border border-primary text-uppercase  bg-light rounded-pill'>
                        <span className="text-dark" style={{width:'150px', fontSize:"20px",color:'black'}}>
                            Vegetables
                        </span>
                    </a>
                </li>

                <li className="nav-items p-2">
                    <a href="" className='d-flex mx-2 py-2 border border-primary text-uppercase  bg-light rounded-pill '>
                        <span className="text-dark" style={{width:'150px', fontSize:"20px",color:'black',}}>
                            Fruits
                        </span>
                    </a>
                </li>

                <li className="nav-items p-2">
                    <a href="" className='d-flex mx-2 py-2 border border-primary text-uppercase  bg-light rounded-pill'>
                        <span className="text-dark" style={{width:'150px', fontSize:"20px",color:'black'}}>
                            Dairy
                        </span>
                    </a>
                </li>

            </ul>
         
       
         <div className='col-lg-12'>
         <div className='row g-4'>
            {
                recentData.map((val,index)=>(
                    <div key={index} className='col-md-6 col-lg-3 bounceINUp' style={{fontFamily:''}}>
                      <div className='product-item position-relative bg-light overflow-hidden '>
                     <img src={val.img} alt="img"
                      className='img-fluid rounded w-100' />
                       </div>
                       <div className=' p-3' >
                        <h4 className='me-auto' >{val.productName}</h4>
                        <label  style={{fontSize:'20px',color:'black'}} >Farmer: {val.farmer}</label>
                        <div>
                        <img style={{width:'15px'}} src={Star} alt="" />
                        <img style={{width:'15px'}} src={Star} alt="" />
                        <img style={{width:'15px'}} src={Star} alt="" />
                        </div>
                        <button className='btn btn-primary mt-5 rounded-pill ' >Add to Cart</button>
                       </div>
                    </div>
                ))
            }
            </div>
            </div>
            </div>
            
          
     </div>

   </div>
   </>
  )
}

export default Latest;