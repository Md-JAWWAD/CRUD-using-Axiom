import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const PostAxios = () => {
    const [name, setName] = useState('')
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [phone, setPhone] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/users', {
            name,
            username: user,
            email,  
            phone
        }).then(()=> navigate('/table')).catch((err)=> console.log(err))
    }




  return (
    <>
    <div className="mb-4">
        <Button onClick={()=> navigate('/table')} variant="outline-dark">See List</Button>
        </div>
    <Form onSubmit={handleSubmit}>
      <FloatingLabel
        controlId="floatingInput"
        label="Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="User name" value={user} onChange={(e) => setUser(e.target.value)}/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
        <Form.Control type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)}/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingNumber" label="Phone no" className="mb-3">
        <Form.Control type="number" placeholder="Phone no" value={phone} onChange={(e) => setPhone(e.target.value)}/>
      </FloatingLabel>
      <Button type="submit">Submit form</Button>
      </Form>
    </>

  )
}

export default PostAxios
