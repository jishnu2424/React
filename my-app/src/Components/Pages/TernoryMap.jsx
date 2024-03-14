import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import CardinTernory from './CardinTernory'
import List from'./List'
import Objects from './Objects'
import Tables from './Tables'

function Ternory() {
    const [showText, setText] = useState(false)
  return (
    <div>
        {showText ? <List/> :<Tables/>}


        <Button onClick={()=>setText(! showText)}  variant="primary">{showText ?"hide":"show"}</Button>
    </div>
  )
}

export default Ternory