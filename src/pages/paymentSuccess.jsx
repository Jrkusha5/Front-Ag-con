import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PaymentSuccess = ({ transactionId, amount }) => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    const handleOrderHistory = () => {
        navigate('/order-history');
    };

    return (
        <div>
        <Header/>
        <div className="container d-flex flex-column align-items-center justify-content-center vh-100 text-center bg-light">
            <div className="shadow p-5 bg-white rounded">
                <h1 className="text-success mb-4">Payment Successful!</h1>
                <p className="mb-4">Thank you for your purchase.</p>
                <div className="mb-4">
                    <p><strong>Transaction ID:</strong> {transactionId}</p>
                    <p><strong>Amount Paid:</strong> ${amount}</p>
                </div>
                <button className="btn btn-success mr-2" onClick={handleGoHome}>
                    Go to Homepage
                </button>
                {/* <button className="btn btn-success" onClick={handleOrderHistory}>
                    View Order History
                </button> */}
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default PaymentSuccess;
