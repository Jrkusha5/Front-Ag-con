import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import Star from '../assets/img/Star.png';
import { Link } from 'react-router-dom';
import { addToCart, getCartTotal } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (item) => {
    let totalPrice = item.quantity * item.price;
    const tempProduct = {
      ...item,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    dispatch(getCartTotal());

  
  };

  return (
    <div>
       <div class="container-fluid page-header mb-1 wow fadeIn text-center " data-wow-delay="0.2s" style={{fontSize:'25px'}}>
        <div class="container text-center">
            <h1 class="display-3 mb-2 animated slideInDown">Markets</h1>
            <nav aria-label="breadcrumb animated slideInDown ">
                <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item"><a class="text-body" href="#">Home</a></li>
                    <li class="breadcrumb-item text-dark active" aria-current="page">Products</li>
                </ol>
            </nav>
        </div>
    </div>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        
        <div className="container-fluid menu bg-light py-6 my-6">
          <h2 className="commodity__title white text-center text-uppercase mt-4" style={{ color: 'black' }}>
            Select a product to Buy
          </h2>
          <div className="container">
          <div className="col-lg-12">
            <div className="row g-4">
              {products.map((product, index) => (
                <div className="col-md-6 col-lg-3 bounceINUp" key={index}>
                  <div className="product-item position-relative bg-light overflow-hidden">
                    <img
                      className="img-fluid rounded w-100"
                      src={product.image}
                      style={{ width: '130px' }}
                      alt={product.name}
                    />
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                        <h4>{product.name}</h4>
                        <h4 className="text-primary">Birr: {product.price}</h4>
                      </div>
                      <p className="mb-0">{product.descrption}</p>
                      <label htmlFor="">Farmer: {product.productOwner}</label>
                      <div>
                        <button type="button" className="btn text-primary btn-lg rounded-pill shadow-sm hover:bg-blue-500">
                          <FaHeart />
                        </button>
                      </div>
                      <div>
                        {[...Array(5)].map((_, i) => (
                          <img key={i} style={{ width: '15px' }} src={Star} alt="star" />
                        ))}
                      </div>
                      <button onClick={() => handleAddToCart(product)} className="btn btn-primary mt-5 rounded-pill">Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Products;
