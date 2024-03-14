import React, { useState } from 'react'
import { Table } from 'react-bootstrap'

function Tables() {
    const [first, setfirst] = useState([{name:"Anju",place:"TVM",img:"45"},{name:"Sanju",place:"TVM",img:"155"},{name:"Panju",place:"TVM",img:"600"}])

  return (
    <div>
         <Table striped bordered hover size="sm">
        
      <thead>
        <tr>
          <th>First Name</th>
          <th>Place</th>
          <th>serial no</th>
        </tr>
      </thead>
      <tbody>
      {first.map((tab)=>
         <>
        <tr>
          <td>{tab.name}</td>
          <td>{tab.place}</td>
          <td>{tab.img} </td>
        </tr> </>
       )}
      </tbody>
     
    </Table>
       
       
    </div>
  )
}

export default Tables