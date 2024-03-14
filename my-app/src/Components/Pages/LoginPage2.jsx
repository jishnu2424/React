import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

function LoginPage2() {
    const [first, setfirst]=useState({username:""},{password:""})



    const handelSubmit=(event)=>{
        event.preventDefault();
        console.log("username :",first.username);
        console.log("password :",first.password);
    }
    
  return (
    <div>
        <Form onSubmit={handelSubmit} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter name"   value={first.username} onChange={(store)=>setfirst({...first,username: store.target.value})}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={first.password} onChange={(save)=>setfirst({...first,password: save.target.value})} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default LoginPage2