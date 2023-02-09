import React,  { useState, useEffect } from 'react';
import { Form, Button, NavDropdown } from 'react-bootstrap'
import FormContainer from '../FormContainer'
import { Link, useNavigate } from 'react-router-dom'

  const Idea = ({ location, history }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [theme, setTheme]= useState('Select Theme')
    useEffect(()=>{
        console.log(title);
        console.log(description);
        console.log(theme);
    })
    return(
    <div className='f-con'>
    <FormContainer >
    <h1 >Idea Submission</h1>
    
    <Form className='py-3'>
    <NavDropdown title={theme}>
                    <NavDropdown.Item value='Machine Learning' onSelect={(e)=>{setTheme(e.target.value)}}>Machine Learning</NavDropdown.Item>
                    <NavDropdown.Item value='IOT'onSelect={(e)=>{setTheme(e.target.value)}}>IOT</NavDropdown.Item>
                    <NavDropdown.Item value='Artificial Intelligence'onSelect={(e)=>{setTheme(e.target.value)}}>Artificial Intelligence</NavDropdown.Item>
                    <NavDropdown.Item value='Block Chain'onSelect={(e)=>{setTheme(e.target.value)}}>Block Chain</NavDropdown.Item>
                  </NavDropdown>
                <Form.Group controlId='title' className='py-3'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type='title' placeholder='Enter Email Address' value={title} onChange={(e) => { setTitle(e.target.value) }}></Form.Control>
                </Form.Group>
                <Form.Group controlId='description' className='py-3'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type='description' placeholder='Enter Description' value={description} onChange={(e) => { setDescription(e.target.value) }}></Form.Control>
                </Form.Group>
                
                <Button type='submit' variant='primary'>Submit</Button>
            </Form>
    </FormContainer>
      </div>
    )
  }
export default Idea;