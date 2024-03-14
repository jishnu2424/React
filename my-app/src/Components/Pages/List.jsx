import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'

function List() {
    const [first, setfirst] = useState([{name:"ajx",place:"tvm",phone:165165},{name:"manu",place:"clt",phone:646551},{name:"sanju",place:"knr",phone:49851454}])
  return (
    <div>
    <ListGroup>
        {first.map((lis)=>
        <>
        <ListGroup.Item disabled>{lis.name}</ListGroup.Item>
      <ListGroup.Item>{lis.place}</ListGroup.Item>
      <ListGroup.Item>{lis.phone}</ListGroup.Item>   
        </>
        )}
      
    </ListGroup>


    </div>
  )
}

export default List