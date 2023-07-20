import React from 'react'
import Home from './screens/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CarDetail from './screens/car-detail/CarDetail'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home />} path='/'/>
            <Route element={<CarDetail />} path='/car/:id'/>
            <Route path='*' element={<div>Not Found</div>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router