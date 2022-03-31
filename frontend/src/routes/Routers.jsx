import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from '../components/Auth/components/ProtectedROute'
import { UserAuthContextProvider } from '../components/Auth/context/UserAuthContext'
import { Content } from '../components/Content'
import Home from '../components/Home'
import  EachProduct  from '../components/Products/EachProduct'
import { Products } from '../components/Products/Products'
import AddressPage from '../components/PurchaseProccess/AddressPage'
import CartPage from '../components/PurchaseProccess/CartPage'
import PaymentPage from "../components/PurchaseProccess/PaymentPage"
import PaymentSuccess from '../components/PurchaseProccess/PaymentSuccess'


export  const Routers = () => {
  return (
    <div>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products/*" element={<Products/>}>
          <Route path=':id' element={<EachProduct/>} />
          </Route>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path='/address' element={<AddressPage/>}/>
          <Route path='/payment' element={<PaymentPage/>}/>
          <Route path='/success' element={<PaymentSuccess/>}/>
        </Routes>
      </UserAuthContextProvider>
        
    </div>
  )
}
