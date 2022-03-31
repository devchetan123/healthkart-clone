import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from '../components/Auth/components/ProtectedROute'
import { UserAuthContextProvider } from '../components/Auth/context/UserAuthContext'
import { Content } from '../components/Content'
import Home from '../components/Home'
import { ProfileStructure } from '../components/ProfileStructure/ProfileStructure'


export  const Routers = () => {
  return (
    <div>
      <UserAuthContextProvider>
        <Routes>
        <Route
                path="/content"
                element={
                  <ProtectedRoute>
                    <Content/>
                  </ProtectedRoute>
                }
              />
              <Route path='/profile' element={<ProfileStructure/>} />
              <Route path='/home' element={<Home/>} />
        </Routes>
      </UserAuthContextProvider>
        
    </div>
  )
}
