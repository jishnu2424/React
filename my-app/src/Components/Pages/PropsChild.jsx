import React from 'react'

function PropsChild({name,arr}) {
    console.log(name);
  return (
    <div>
        <h5>{name}</h5>
        {arr.map((display)=>
        <>
        <h5>{display.name}</h5>,
        <h5>{display.place}</h5>
        </> 
        )}
    </div>
  )
}

export default PropsChild