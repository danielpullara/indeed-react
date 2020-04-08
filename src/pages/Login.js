import React from 'react';
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {useSelector} from "react-redux"

export default function Login() {
    let email = useSelector(state => state.user.email)
    let password = useSelector(state => state.user.password)
    let dispatch = useDispatch()
    let history = useHistory()

    let login = (e) => {
        e.preventDefault()
        let user = { email: email, password: password }
        dispatch({ type: 'LOGIN', payload: user })
        history.push('/candidates')
    }

    return (

        <div>
            <Form onSubmit={(e) => login(e)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => email = e.target.value} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => password = e.target.value} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
  </Button>
            </Form>
        </div>
    )
}