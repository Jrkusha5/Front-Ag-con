import React from 'react'
import Home from '../pages/Home';
import ContactUs from '../pages/ContactUs'
import Login from '../pages/Login'
import Products from '../pages/Products'

import SignUp from '../pages/SignUp';
import Cart from '../pages/Cart';
import Farmer from '../pages/SignIn/Farmer'
import Buyer from '../pages/SignIn/Buyer'
import Logistics from '../pages/SignIn/Logistics'
import OrderPage from '../components/Order';
import {Routes, Route } from 'react-router-dom';
//import ProtectedRoute from './ProtectedRoutes';
// import MyAccount from '../Dashboard/buyer-account/MyAccount';
// import Dashboard from '../Dashboard/farmer-account/Dashboard';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/contactUs' element={<ContactUs/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/Signup' element={<SignUp/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/Products' element={<Products/>}/>
    <Route path='/signUpFarmer' element={<Farmer/>}/>
    <Route path='/signUpBuyer' element={<Buyer/>}/>
    <Route path='/signUpLogistics' element={<Logistics/>}/>
    <Route path="/order" element={<OrderPage/>}/>


    {/* <Route path="/buyer-profile" element={<ProtectedRoute allowedRoles={['buyer']}> <MyAccount/></ProtectedRoute>}/>
    <Route path="/farmer-profile" element={<ProtectedRoute allowedRoles={['farmer']}> <Dashboard/> </ProtectedRoute>}/> */}
   </Routes>
  )
}

export default Routers