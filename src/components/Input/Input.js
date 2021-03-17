import React from 'react'
import { Form } from 'react-bootstrap';

const Input = () => {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Search for product</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
        </Form>
    )
}

export default Input
