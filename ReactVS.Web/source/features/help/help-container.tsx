import * as React from 'react'
import * as redux from 'redux'
import { connect } from 'react-redux'

interface MyProps { }
interface MyState { }

export class HelpContainer extends React.Component<MyProps, MyState> {
    render() {
        return <div>
            <h1>Help</h1>
        </div>
    }
}

