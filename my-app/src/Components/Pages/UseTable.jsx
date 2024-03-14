import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { newcontext } from './Usecontext'

function UseTable() {
    const [first,setfirst]=useContext(newcontext);
    console.log(first)
  return (
    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          
          <th> Name</th>
          <th>place</th>
          <th>number</th>
        </tr>
      </thead>
      <tbody>
      {first.map((tab)=>
         <>
        <tr>
          <td>{tab.name}</td>
          <td>{tab.place}</td>
          <td>{tab.number} </td>
        </tr> </>
       )}
      </tbody>
    </Table>
        

    </div>
  )
}

export default UseTable