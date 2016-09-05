import * as React from 'react'
import * as redux from 'redux'
import { connect } from 'react-redux'
import { LoginForm } from '../components/login/component'

interface MyProps { }
interface MyState { }

export class LoginView extends React.Component<MyProps, MyState> {
    render() {
        return <div>
            <h1>About Us</h1>
            <LoginForm />
            {this.props.children}
        </div>
    }
}

