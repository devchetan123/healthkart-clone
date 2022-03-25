import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../components/Home'

function Routers() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default Routers