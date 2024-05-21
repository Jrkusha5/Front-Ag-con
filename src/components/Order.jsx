import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../redux/orderSlice';
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: cartProducts, totalAmount, deliverCharge } = useSelector((state) => state.cart);
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  const handlePlaceOrder = () => {
    dispatch(placeOrder({
      cartProducts,
      totalAmount,
      deliverCharge,
      shippingAddress,
      paymentMethod,
    }));
    navigate('/order-success');
  };

  return (
    <div className="container-fluid py-5" style={{ fontSize: "20px", color: 'black' }}>
      <div className="container py-5">
        <h1 className="display-4 text-center mb-4">Place Your Order</h1>
        <div className="row">
          <div className="col-lg-8 mb-5">
            <div className="bg-light p-4 rounded">
              <h3 className="mb-4">Shipping Address</h3>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your address"
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                />
              </div>
              <h3 className="mb-4">Payment Method</h3>
              <div className="form-group mb-3 fs-3">
                <select
                  className="form-control "
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="Credit Card">Credit Card</option>
                  <option value="PayPal">PayPal</option>
                  <option value="Cash on Delivery">Cash on Delivery</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bg-light p-4 rounded">
              <h3 className="mb-4">Order Summary</h3>
              <div className="d-flex justify-content-between mb-2">
                <h5 className="mb-0">Subtotal:</h5>
                <p className="mb-0">Birr: {totalAmount}</p>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <h5 className="mb-0">Delivery Charge:</h5>
                <p className="mb-0">Birr: {deliverCharge}</p>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <h5 className="mb-0">Total:</h5>
                <p className="mb-0">Birr: {totalAmount }</p>
              </div>
              <button
                className="btn btn-primary w-100 mt-4"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
