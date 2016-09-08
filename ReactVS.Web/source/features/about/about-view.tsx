﻿import * as React from 'react'
import * as redux from 'redux'
import { connect } from 'react-redux'

interface MyProps { message: string }
interface MyState { }

export class AboutView extends React.Component<MyProps, MyState> {
    render() {
        return <div>
            <h1>About Us </h1>
            {this.props.message}
            </div>
    }
}

