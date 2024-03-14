import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import'../Styles/bg.css'

function TernoryBgcolor() {
    const [showText, setText] = useState(false)

  return (
    <div className={showText ?"Dark":"light"}>
        {showText ?<h1>Dark Mode</h1> : <h1>light Mode</h1> }
        <Button onClick={()=>setText(! showText)}  variant="primary">{showText ?"Light Mode":"Dark Mode"}</Button>
    </div>
  )
}

export default TernoryBgcolor