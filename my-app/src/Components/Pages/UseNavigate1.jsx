import React from 'react'
import { useNavigate } from 'react-router-dom'

function UseNavigate1() {


const add=useNavigate();


    const Sample=()=>{
        add('/samp')
    };
  return (
    <div>
        <button onClick={Sample}>click me</button>
    </div>
  )
}

export default UseNavigate1