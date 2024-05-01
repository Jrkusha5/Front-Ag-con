import React from 'react'
import Home from '../pages/Home';
import ContactUs from '../pages/ContactUs'
import Login from '../pages/Login'
import Products from '../pages/Products'
import AboutUs from '../pages/AboutUs';
import SignUp from '../pages/SignUp';
import Cart from '../pages/Cart';
import Farmer from '../pages/SignIn/Farmer'
import Buyer from '../pages/SignIn/Buyer'
import Logistics from '../pages/SignIn/Logistics'

// import Product from '../components/Product';
import {Routes, Route } from 'react-router-dom';

const Routers = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contactUs' element={<ContactUs/>}/>
    <Route path='/aboutUs' element={<AboutUs/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/Signup' element={<SignUp/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/Products' element={<Products/>}/>
    <Route path='/signUpFarmer' element={<Farmer/>}/>
    <Route path='/signUpBuyer' element={<Buyer/>}/>
    <Route path='/signUpLogistics' element={<Logistics/>}/>

    
   </Routes>
  )
}

export default Routers