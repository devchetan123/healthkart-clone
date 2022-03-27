import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../components/Home'
import  EachProduct  from '../components/Products/EachProduct'
import { Products } from '../components/Products/Products'

function Routers() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products/*" element={<Products/>}>
          <Route path=':id' element={<EachProduct/>} />
          </Route>
        </Routes>
    </div>
  )
}

export default Routers