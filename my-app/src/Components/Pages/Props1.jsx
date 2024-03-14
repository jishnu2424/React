import React, { useState } from 'react'
import Props2 from './Props2'

function Props1() {
    const [first, setfirst] = useState("Jishnu")
    const [second, setsecond] = useState(10)
  return (
    <div>
        <Props2 name1={first} name2={setfirst} age={second}/>
    </div>
  )
}

export default Props1