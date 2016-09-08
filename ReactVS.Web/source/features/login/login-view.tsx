
import * as React from 'react'
import * as redux from 'redux'
import { connect } from 'react-redux'
import { Component, CSSProperties } from 'react';

import { Form, Checkbox, FormGroup, Col, FormControl, Button } from 'react-bootstrap'

interface MyProps { }
interface MyState { }


export class LoginForm extends React.Component<MyProps, MyState> {

    onLoginClick = (event: any) => { alert('Saved'); }


    render() {
        return <div>

            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass="na" sm={2}>
                        Email
                    </Col>
                    <Col sm={10}>
                        <FormControl type="email"  placeholder="Email" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass="na" sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password" placeholder="Password" />
                    </Col>
                </FormGroup>


                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit">
                            Sign in
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    }
}

