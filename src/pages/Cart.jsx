import React, { useEffect ,useContext} from "react";


import { useDispatch, useSelector } from "react-redux";
import {
  getCartTotal,
  removeItem,
  updateQuantity,
} from "../redux/cartSlice";
import emptyCartImage from "../assets/img/empty.gif"
// import StripeCheckout from "react-stripe-checkout";

const Cart = () => { 
  const dispatch = useDispatch();
  const {
    data: cartProducts,
    totalAmount,
    deliverCharge,
  } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [useSelector((state) => state.cart)]);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  const increaseQty = (cartProductId, currentQty) => {
    const newQty = currentQty + 1;
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const decreaseQty = (cartProductId, currentQty) => {
    const newQty = Math.max(currentQty - 1, 1);
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };
  const emptyCartMsg = (
    <h4 className="container text-center mb-2 pt-3">Your Cart is Empty
    <img src={emptyCartImage} />
    </h4>
    
  );

  // const publishableKey =
  //   "pk_test_51OcmIbCxCPSowgrvLVfa9jUamXTHsITT2UNGG7Ojx60KkvMcQakUBVZtKgzE5TmXMJAlarNwxuzFQ4e0r7ZNcGrW00dnVF5R6o";

  // const onToken = (token) => {
  //   // Handle the token (send it to your server for further processing)
  //   console.log(token);
  
  return (
    <>
      {/* <Heading title="Cart" subtitle="Home" heading="Cart" /> */}
      <div class="container-fluid page-header mb-1 wow fadeIn text-center " data-wow-delay="0.2s" style={{fontSize:'25px'}}>
        <div class="container text-center">
            <h1 class="display-3 mb-2 animated slideInDown">Cart</h1>
            <nav aria-label="breadcrumb animated slideInDown ">
                <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item"><a class="text-body" href="#">Home</a></li>
                    <li class="breadcrumb-item text-dark active" aria-current="page">Cart</li>
                </ol>
            </nav>
        </div>
    </div>

      {cartProducts.length === 0 ? (
        emptyCartMsg
      ) : (
        <div className="container-fluid py-5" style={{ fontFamily:'',fontSize:"20px",color:'black'}}>
          <div className="container py-5" >
            <div className="table-responsive">
              <table className="table" style={{color:'black'}}>
                <thead>
                  <tr>
                    <th scope="col">Products</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((cartProduct) => (
                    <tr key={cartProduct.id}>
                      <th scope="row">
                        <div className="d-flex align-items-center">
                          <img
                            src={cartProduct.image}
                            alt={cartProduct.image}
                            style={{ width: 100 }}
                          />
                        </div>
                      </th>
                      <td>
                        <p className="mb-0 mt-4">{cartProduct.name}</p>
                      </td>
                      <td>
                        <p className="mb-0 mt-4">{cartProduct.price}</p>
                      </td>
                      <td>
                        <div
                          className="input-group quantity mt-4"
                          style={{ width: "100px" }}
                        >
                          <div className="input-group-btn">
                            <button
                              onClick={() =>
                                decreaseQty(
                                  cartProduct.id,
                                  cartProduct.quantity
                                )
                              }
                              className="btn btn-sm btn-minus rounded-circle bg-light border"
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                          </div>
                          <span className="form-control form-control-sm text-center border-0">
                            {cartProduct.quantity || 1}
                          </span>
                          <div className="input-group-btn">
                            <button
                              onClick={() =>
                                increaseQty(
                                  cartProduct.id,
                                  cartProduct.quantity
                                )
                              }
                              className="btn btn-sm btn-plus rounded-circle bg-light border"
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0 mt-4">Birr:{cartProduct.totalPrice} </p>
                      </td>
                      <td>
                        <button
                          onClick={() => handleRemoveItem(cartProduct.id)}
                          className="btn btn-md rounded-circle bg-light border mt-4"
                        >
                          <i className="fa fa-times text-danger"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="row g-4 justify-content-end">
              <div className="col-8"></div>
              <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                <div className="bg-light rounded">
                  <div className="p-4">
                    <h1 className="display-6 mb-4">
                      Cart <span className="fw-normal">Total</span>
                    </h1>
                    <div className="d-flex justify-content-between mb-4">
                      <h5 className="mb-0 me-4">Subtotal:</h5>
                      <p className="mb-0">Birr:{totalAmount}</p>
                    </div>
                    {/* <div className="d-flex justify-content-between">
                      <h5 className="mb-0 me-4">Shipping</h5>
                      <div> 
                         <p className="mb-0">Flat rate: ${deliverCharge}</p>
                      </div>
                    </div> */}
                  </div>
                  <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                    <h5 className="mb-0 ps-4 me-4">Total</h5>
                    <p className="mb-0 pe-4">Birr: {totalAmount + deliverCharge}</p>
                  </div>
                   <button
                    className="btn border-primary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                    type="button"
                  >
                    Proceed Checkout
                  </button>
                  {/* <StripeCheckout
                    token={onToken}
                    stripeKey={publishableKey}
                    amount={100 * totalAmount} // Amount in cents
                    name="MD"
                    currency="USD"
                    label="Proceed Checkout"
                    className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                  /> */}
                </div>
              </div>
            </div>
           </div>
         </div>
        
      )}
    </>
  );
}
export default Cart
