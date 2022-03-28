import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../components/Home'
import AddressPage from '../components/PurchaseProccess/AddressPage'
import CartPage from '../components/PurchaseProccess/CartPage'

function Routers() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path='/address' element={<AddressPage/>}/>
        </Routes>
    </div>
  )
}

export default Routers