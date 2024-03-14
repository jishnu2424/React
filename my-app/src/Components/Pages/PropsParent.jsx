import React, { useState } from 'react'
import PropsChild from './PropsChild'

function PropsParent() {
    const [first, setfirst] = useState("Adith")
    const [array, setarray] = useState([{name:"adith",place:"clt"},{name:"hafiz",place:"L D"}])
  return (
    <div>

        <PropsChild name={first} arr={array}/>
    </div>
  )
}

export default PropsParent