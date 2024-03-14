import React from 'react'
import { useParams } from 'react-router-dom'

function Useparams() {
    const {user}=useParams();
  return (
    <div>
        <h1>user:{user}</h1>


        {/* Route eg
        <Route path='/data/:user' element={<><Useparams/></>}/> */}

    </div>
  )
}

export default Useparams