import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const FormContainer = ({ children }) => {
    return (
        <Container className='form-container'>
            <Row>
                <Col xs={24} md={10}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default FormContainer
