import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

function Form1() {
    const [user, setuser] = useState({name:"",password:"",address:"",city:""})
    const [radio, setradio] = useState("")
    const [drop, setdrop] = useState("")    
    const display=(view)=>{
        view.preventDefault()
        console.log("UserName:",user.name)
        console.log("Password:",user.password)
        console.log("Address:",user.address)
        console.log("Gender:",radio)
        console.log("City",user.city)
        console.log("State:",drop)
    }
  return (
    <div><Form onSubmit={display} style={{width:"900px",margin:"auto",marginTop:"100px",backgroundColor:"cyan",color:"black",padding:"20px" ,border:"black 5px solid"}}>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridUserName">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="Enter Username"  onChange={(usrname)=>setuser({...user,name:usrname.target.value})}/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={(pass)=>setuser({...user,password:pass.target.value})} />
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Address</Form.Label>
      <Form.Control placeholder="1234 Main St"  onChange={(add)=>setuser({...user,address:add.target.value})}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridRadio">
      <Form.Label>Gender</Form.Label> <br />
      <label htmlFor="">Male</label>&nbsp;
      <input type="radio" name='gender' checked={radio==='Male'} value="Male" onChange={()=>setradio("Male")}/>
      &nbsp;&nbsp;&nbsp;
      <label htmlFor="">Female</label>&nbsp;
      <input type="radio" name='gender' checked={radio==='Female'} value="Female" onChange={()=>setradio("Female")}/> 
 
    </Form.Group>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control  onChange={(ct)=>setuser({...user,city:ct.target.value})} />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Select defaultValue="Choose..." onChange={(drp)=>setdrop(drp.target.value)} defaultChecked={drop}>
        <option value="">Select a state</option>
        <option value="Kerala">Kerala</option>
        <option value="T N">T N</option>
        <option value="Goa">Goa</option>
        <option value="Karnadaka">Karnadaka</option>
        <option value="Assam">Assam</option>
        </Form.Select>
      </Form.Group>
    </Row>


    

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form></div>
  )
}

export default Form1
