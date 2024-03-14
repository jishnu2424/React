import React from 'react'
import{ BrowserRouter, Route, Routes } from'react-router-dom'
import Navigation from './Navigation'
import Tables from './Tables'
import Form1 from './Form1'
import { Card } from 'react-bootstrap'
import CardinTernory from './CardinTernory'

function Router() {
  return (
    <div>
        
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<><Navigation/></>}/>
            <Route path='/home' element={<><Form1/></>}/>
            <Route path='/but' element={<><CardinTernory/></>}/>
        </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default Router