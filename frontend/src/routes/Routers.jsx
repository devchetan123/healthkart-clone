import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../components/Home'
import AddressPage from '../components/PurchaseProccess/AddressPage'
import CartPage from '../components/PurchaseProccess/CartPage'
import PaymentPage from "../components/PurchaseProccess/PaymentPage"
import PaymentSuccess from '../components/PurchaseProccess/PaymentSuccess'

function Routers() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path='/address' element={<AddressPage/>}/>
          <Route path='/payment' element={<PaymentPage/>}/>
          <Route path='/success' element={<PaymentSuccess/>}/>
        </Routes>
    </div>
  )
}

export default Routers