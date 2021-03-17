// @ts-nocheck
import React, { useState } from 'react'
import { Form } from 'react-bootstrap';

const Input = (props) => {
    const { onSearch } = props;

    const [searchText, setSearchText] = useState('');

    const handleInput = (event) => {
        const text = event.target.value;
        setSearchText(text)
    }

    const handleEnterKeyPressed = (event) => {
        if (event.key === 'Enter') {
            onSearch(setSearchText)
        }
    }

    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Control
                    style={{ marginTop: 50 }}
                    type="text"
                    value={searchText}
                    placeholder="Insert search keywords"
                    onKeyPress={handleEnterKeyPressed} />
            </Form.Group>
        </Form>
    )
}

export default Input
