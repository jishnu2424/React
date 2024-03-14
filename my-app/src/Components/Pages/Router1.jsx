import React from 'react'
import{ BrowserRouter, Route, Routes }from 'react-router-dom'
import Sample from './Sample'
import UseNavigate1 from './UseNavigate1'
import Useparams from './Useparams'
function Router1() {
  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route path='/'element={<><UseNavigate1/></>}/>
        <Route path='/samp' element={<><Sample/></>}/>
        <Route path='/data/:user' element={<><Useparams/></>}/>
       </Routes>
       </BrowserRouter> 
    </div>
  )
}

export default Router1