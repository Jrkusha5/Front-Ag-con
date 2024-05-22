import React, { useState } from 'react';

const OrderPage = () => {
  const [products, setProducts] = useState([]);
  const [buyerInfo, setBuyerInfo] = useState({ name: '', email: '' });
  const [orderTotal, setOrderTotal] = useState(0);

  const handleProductChange = (productId, quantity) => {
    setProducts(prevProducts =>
      prevProducts.map(item => (item.productId === productId ? { ...item, quantity } : item))
    );
    // Recalculate total based on updated quantity
    calculateOrderTotal();
  };

  const handleInputChange = (event) => {
    setBuyerInfo({ ...buyerInfo, [event.target.name]: event.target.value });
  };

  const calculateOrderTotal = () => {
    let total = 0;
    products.forEach(item => (total += item.quantity * item.price)); // Assuming 'price' is available in product data
    setOrderTotal(total);
  };

  const handleSubmitOrder = async (event) => {
    event.preventDefault();

    // Simulate API call (replace with actual API call)
    try {
      const response = await fetch('http://localhost:3000/api/v1/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ buyerInfo, products }),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const data = await response.json();
      console.log('Order created successfully:', data);
      // Handle successful order creation (e.g., display confirmation message)
    } catch (error) {
      console.error('Error creating order:', error);
      // Handle order creation error (e.g., display error message)
    }
  };

  return (
    <div>
      <div className="container-fluid page-header mb-1 wow fadeIn text-center" data-wow-delay="0.2s" style={{ fontSize: '25px' }}>
        <div className="container text-center">
          <h1 className="display-3 mb-2 animated slideInDown">Order</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a className="text-body" href="#">Home</a></li>
              <li className="breadcrumb-item text-dark active" aria-current="page">Order</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container order-page">
      <h2>Order Form</h2>
      {/* Product Selection Section */}
      <div className="product-selection">
        <h4>Products</h4>
        <ul>
          {products.map(product => (
            <li key={product.productId} className="product-item">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <p className="product-name">{product.name}</p>
                <p className="product-price">Price: ${product.price}</p>
                <div className="quantity-selector">
                  <label htmlFor={`quantity-${product.productId}`}>Quantity:</label>
                  <input
                    type="number"
                    id={`quantity-${product.productId}`}
                    min="1"
                    value={product.quantity}
                    onChange={e => handleProductChange(product.productId, e.target.value)}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Buyer Information Section */}
      <div className="buyer-info">
        <h3>Buyer Information</h3>
        <form onSubmit={handleSubmitOrder}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={buyerInfo.name}
            onChange={handleInputChange}
            required
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={buyerInfo.email}
            onChange={handleInputChange}
            required
          />
          <br />
        </form>
      </div>

      {/* Order Summary Section */}
      <div className="order-summary">
        <h3>Order Summary</h3>
        <p>Total: ${orderTotal}</p>
        <button type="submit" onClick={handleSubmitOrder}>
          Submit Order
        </button>
      </div>
    </div>
    </div>
  )
};

export default OrderPage;
