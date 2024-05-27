import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import Star from '../assets/img/Star.png';
import { addToCart, getCartTotal } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://agribackend-mstw.onrender.com/api/v1/products/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = (item) => {
    let totalPrice = item.availableQuantity * item.price;
    const tempProduct = {
      ...item,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    dispatch(getCartTotal());
  };

  return (
    <div>
      <Header />
      <div className="container-fluid page-header mb-1 wow fadeIn text-center" data-wow-delay="0.2s" style={{ fontSize: '25px' }}>
        <div className="container text-center">
          <h1 className="display-3 mb-2 animated slideInDown">Product Details</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a className="text-body" href="/">Home</a></li>
              <li className="breadcrumb-item text-dark active" aria-current="page">Product Details</li>
            </ol>
          </nav>
        </div>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6">
              <img className="img-fluid rounded w-100" src={product.image} alt={product.name} />
            </div>
            <div className="col-md-6">
              <h2>{product.name}</h2>
              <h4 className="text-primary">Birr: {product.price}</h4>
              <p>{product.description}</p>
              <p><strong>Farmer:</strong> {product.productOwner}</p>
              <div>
                <button type="button" className="btn text-primary btn-lg rounded-pill shadow-sm hover:bg-blue-500">
                  <FaHeart />
                </button>
              </div>
              <div className="my-3">
                {[...Array(5)].map((_, i) => (
                  <img key={i} style={{ width: '15px' }} src={Star} alt="star" />
                ))}
              </div>
              <button onClick={() => handleAddToCart(product)} className="btn btn-primary mt-3 rounded-pill">Add to Cart</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetail;
