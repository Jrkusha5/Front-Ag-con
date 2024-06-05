import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PaymentSuccess = ({ transactionId, totalAmount }) => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/productlist');
    };

    return (
        <div>
        <Header/>
        <div className="container d-flex flex-column align-items-center justify-content-center vh-100 text-center ">
            <div className="shadow p-5 bg-white rounded bg-light">
                <h1 className="text-success mb-4 ">Payment Successful!</h1>
                <p className="mb-4">Thank you for your purchase.</p>
                
                <button className="btn btn-success mr-2" onClick={handleGoHome}>
                    Orders page
                </button>
                
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default PaymentSuccess;
