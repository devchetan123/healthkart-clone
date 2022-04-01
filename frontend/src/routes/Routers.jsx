import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserAuthContextProvider } from '../components/Auth/context/UserAuthContext'
import  EachProduct  from '../components/Products/EachProduct'
import AddressPage from '../components/PurchaseProccess/AddressPage'
import CartPage from '../components/PurchaseProccess/CartPage'
import PaymentPage from "../components/PurchaseProccess/PaymentPage"
import PaymentSuccess from '../components/PurchaseProccess/PaymentSuccess'
import {LeftRight} from "../components/productPage/LeftRight"

import { LandingPage } from "../components/LandingPage/LandingPage"
import Profile from '../components/ProfileStructure/Profile'
import { ProfileStructure } from '../components/ProfileStructure/ProfileStructure'
import Wishlist from '../components/Wishlist'

export  const Routers = () => {
  return (
    <div>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/products" element={<LeftRight/>} />
          <Route path='/products/:id' element={<EachProduct/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path='/address' element={<AddressPage/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/payment' element={<PaymentPage/>}/>
          <Route path='/success' element={<PaymentSuccess/>}/>
          <Route path='/profile' element={<ProfileStructure/>}/>
        </Routes>
      </UserAuthContextProvider>
        
    </div>
  )
}
