import React, { useState } from 'react'
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import axios from 'axios'
const Register = () => {

    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    
    const handleSubmit= (e)=>{
        e.preventDefault()
       
     
        axios.post('http://localhost:3400/register',{name,email,password})
        .then(res=>console.log(res) )
        .catch(err=>console.log(err))   
        
        
        

    }
  return (
    <div>
        <Container>
            <Row className=' justify-content-center '>
                <Col md={4} className='shadow p-3  bg-success bg-opacity-50' >
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
        <Form.Label>Enter Name</Form.Label> 
        
        <Form.Control type="text" placeholder="Enter name" onClick={(e)=>setName(e.target.value)} name='name' />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onClick={(e)=>setEmail(e.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onClick={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      
      <div>
      <Button  type="submit" className=' bg-primery w-100 border-black '>
        Submit
      </Button>

      </div>
     
    </Form>
                </Col>
      
            </Row>
      

        </Container>
     
    </div>
  )
}

export default Register