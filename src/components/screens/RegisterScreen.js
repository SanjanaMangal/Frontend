import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import FormContainer from '../FormContainer'


const RegisterScreen = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    useEffect(()=>{
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(confirmPassword);
        console.log(message);

    })


        //Dispatch Login
    return (
        <div className='f-con'>
        <FormContainer>
            
            <h1 >Register</h1>
            
            <Form  className='py-3'>
                <Form.Group controlId='name' className='py-3'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control className='f-c' type='text' placeholder='Enter Your Name' value={name} onChange={(e) => { setName(e.target.value) }}></Form.Control>
                </Form.Group>
                <Form.Group controlId='email' className='py-3'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control className='f-c' type='email' placeholder='Enter Email Address' value={email} onChange={(e) => { setEmail(e.target.value) }}></Form.Control>
                </Form.Group>
                <Form.Group controlId='password' className='py-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='f-c' type='password' placeholder='Enter Password' value={password} onChange={(e) => { setPassword(e.target.value) }}></Form.Control>
                </Form.Group>
                <Form.Group controlId='confirmPassword' className='py-3'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control  className='f-c' type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }}></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>Register</Button>
            </Form>
            <p>Already Have an Account? <Link to=''>Login</Link></p>
        </FormContainer>
        </div>
    )
}

export default RegisterScreen
