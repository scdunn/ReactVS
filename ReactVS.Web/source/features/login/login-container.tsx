import * as React from 'react'
import * as redux from 'redux'
import { connect } from 'react-redux'
import { LoginForm } from './login-view'

interface MyProps { }
interface MyState { }

export class LoginContainer extends React.Component<MyProps, MyState> {
    render() {
        return <div>
            <h1>Login</h1>
            <LoginForm />
            {this.props.children}
        </div>
    }
}

