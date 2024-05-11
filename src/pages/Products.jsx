import React, { useState }  from 'react'
import CommonHeading from '../components/CommonHeading'
import grains from '../assets/img/grains.png'
import { menu } from "../assets/data/Item";
import Star from '../assets/img/Star.png'
import { FaHeart } from 'react-icons/fa'

import { Link } from "react-router-dom";
import { addToCart, getCartTotal } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
//import Testimonials from '../components/Testimonials';

const Products = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const handleAddToCart = (item) => {
    //console.log(item);
    let totalPrice = qty * item.price;
    const tempProduct = {
      ...item,
      quantity: qty,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    dispatch(getCartTotal());
  };

  const [menuItem, setMenuItem] = useState(menu);
  const filterItems = (category) => {
    const newItems = menu.filter((item) => item.category === category);
    setMenuItem(newItems);

    // for all data show
    if (category === "all") {
      setMenuItem(menu);
      return;
    }
  };
  return (
    <div>
        <div class="container-fluid page-header mb-1 wow fadeIn" data-wow-delay="0.2s" style={{fontSize:'25px'}}>
        <div class="container">
            <h1 class="display-3 mb-2 animated slideInDown">Market</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item"><a class="text-body" href="#">Home</a></li>
                    <li class="breadcrumb-item text-dark active" aria-current="page">Products</li>
                </ol>
            </nav>
        </div>
    </div>
    
    
            {/* <div className='content'>
              <div className="container-commodity">
              <CommonHeading title="Our Products" description="Most Popular products in the Oneገበያ"/>

                <div className="container ">
                  <h2 className="commodity__title white text-center mt-4">
                    Select a product to Buy/Sell
                  </h2>
                  <div className="row  rounded-pill">
                    <div className="col-md-12 text-center ms-2 rounded-pill" style={{fontSize:'20px',color:'black',fontFamily:''}}>
                      <button type='button' id='button_1' className='family_button rounded-pill' >
                        <img src={grains} style={{height:'70px'}}  className="family__white-circle rounded-pill " alt="" />
                        Grains
                      </button>
                      <button type='button' id='button_2' className='family_button rounded-pill' >
                        <img src={grains} style={{height:'70px'}}  className="family__white-circle rounded-pill" alt="" />
                        Vegetables
                      </button>
                      <button type='button' id='button_3' className='family_button rounded-pill' >
                        <img src={grains} style={{height:'70px'}} className="family__white-circle rounded-pill" alt="" />
                        Dairy
                      </button>
                      <button type='button' id='button_4' className='family_button rounded-pill' >
                        <img src={grains} style={{height:'70px'}} className="family__white-circle rounded-pill" alt="" />
                        Fruits
                      </button>
                    </div>

                  </div>
                  
            </div>
            </div> */}
            <div className="container-fluid menu bg-light py-6 my-6">
            <h2 className="commodity__title white text-center text-uppercase mt-4"style={{ color:'black'}}>
                    Select a product to Buy
                  </h2>
      <div className="container" >
       
        <div className="tab-className text-center" style={{ fontSize:"20px",color:'black'}}>
          <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
            <li className="nav-item" >
              <a
                className='nav-link py-2 mx-2 border border-primary text-uppercase bg-white rounded-pill' 
                onClick={() => filterItems("all")} style={{color:'black'}}
              >
                All Items
              </a>
            </li>
            <li className="nav-item">
              <a
                className='nav-link py-2 mx-2 border border-primary text-uppercase bg-white rounded-pill' 
                onClick={() => filterItems("Grains")} style={{color:'black'}}
              >
                Grains
              </a>
            </li>
            <li className="nav-item">
              <a
                className='nav-link py-2 mx-2 border border-primary text-uppercase bg-white rounded-pill'
                onClick={() => filterItems("Vegetables")} style={{color:'black'}}
              >
                Vegetables
              </a>
            </li>
            <li className="nav-item">
              <a
                className='nav-link py-2 mx-2 border border-primary text-uppercase  bg-white rounded-pill'
                onClick={() => filterItems("Dairy")} style={{color:'black'}}
              >
                Dairy
              </a>
            </li>
            <li className="nav-item">
              <a
                className='nav-link py-2 mx-2 border border-primary text-uppercase bg-white rounded-pill'
                onClick={() => filterItems("offers")} style={{color:'black'}}
              >
                Offers
              </a>
            </li>
            <li className="nav-item">
              <a
                className='nav-link py-2 mx-2 border border-primary text-uppercase bg-white rounded-pill'
                onClick={() => filterItems("Fruits")} style={{color:'black'}}
              >
                Fruits
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {menuItem.map((item, key) => (
                  <div className="col-lg-4" key={key}>
                    <div className="menu-item d-flex align-items-center bg-white p-3 rounded">
                      <img
                        className="flex-shrink-0 img-fluid rounded-circle"
                        src={item.img} style={{width:'130px'}}
                        alt="img"
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                          <h4>{item.name}</h4>
                          <h4 className="text-primary">${item.price}</h4>
                          
                        </div>
                        <p className="mb-0">{item.content}</p>
                        <label htmlFor="">Farmer: {item.farmer}</label>
                        <div >
                          <button>
                          <FaHeart className=' rounded-circle '/>
                          </button>
                        </div>
                        <div>
                        <img style={{width:'15px'}} src={Star} alt="" />
                        <img style={{width:'15px'}} src={Star} alt="" />
                        <img style={{width:'15px'}} src={Star} alt="" />
                        </div>
                        <button onClick={() => handleAddToCart(item)} className="btn btn-primary mt-5 rounded-pill">Add to Cart</button>
                        
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
            </div>
    
  )
}

export default Products