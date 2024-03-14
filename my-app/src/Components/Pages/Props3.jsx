import React, { useState } from 'react'
import Props5 from './Props5'

function Props3() {
    const [first, setfirst] = useState([{name:"Adith",place:"clt"},{name:"Hafiz",place:"L D"}])
  return (
    <div>
     <Props5 val1={first} val2={setfirst} />
    </div>
  )
}

export default Props3