import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Ternory() {
  return (
    <div>
        {showText ? <h1>Show Text Here</h1>:""}
        <Button onClick={()=>setText(! showText)}  variant="primary">{showText ?"hide":"show"}</Button>
    </div>
  )
}

export default Ternory