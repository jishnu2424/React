import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

function LoginPage() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")


    const handelSubmit=(event)=>{
        event.preventDefault();
        console.log("username :",username);
        console.log("password :",password)
    }
    
  return (
    <div>
        <Form onSubmit={handelSubmit} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter name"   value={username} onChange={(store)=>setusername(store.target.value)}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(save)=>setpassword(save.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default LoginPage