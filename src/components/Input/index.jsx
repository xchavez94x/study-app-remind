import React from 'react'
import { Form } from "react-bootstrap"

export default function InputElement(props) {
    const { label, type, placeHolder, text } = props;
    return (
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeHolder} />
            <Form.Text className="text-muted">
                {text}
            </Form.Text>
        </Form.Group>
    )
}