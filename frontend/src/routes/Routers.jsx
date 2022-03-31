import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from '../components/Auth/components/ProtectedROute'
import { UserAuthContextProvider } from '../components/Auth/context/UserAuthContext'
import { Content } from '../components/Content'
import Home from '../components/Home'
import  EachProduct  from '../components/Products/EachProduct'
import { Products } from '../components/Products/Products'


export  const Routers = () => {
  return (
    <div>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products/*" element={<Products/>}>
          <Route path=':id' element={<EachProduct/>} />
          </Route>
        </Routes>
      </UserAuthContextProvider>
        
    </div>
  )
}
