import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../components/Home'
import { Watchlist } from '../components/Watchlist/Watchlist'

function Routers() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="wishlist" element={<Watchlist/>}/>
        </Routes>
    </div>
  )
}

export default Routers