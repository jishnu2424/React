import React, { useState } from 'react'

function Objects() {
    const [first, setfirst] = useState({name:'arun',place:"tvm"})
   

  return (
    <div>
    <section>
        
        <h1>{first.name}</h1>
        <h2>{first.place}</h2>
    </section>



    </div>
  )
}

export default Objects