// @ts-nocheck
import React, { useState } from 'react'
import { Form } from 'react-bootstrap';

const Input = () => {

    const [searchText, setSearchText] = useState('');





    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Control
                    style={{ marginTop: 50 }}
                    type="text"
                    value={searchText}
                    placeholder="Insert search keywords"
                />
            </Form.Group>
        </Form>
    )
}

export default Input
