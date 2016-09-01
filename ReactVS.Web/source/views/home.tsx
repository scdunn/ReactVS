import * as React from 'react'
import * as redux from 'redux'
import { connect } from 'react-redux'

import { Students } from '../components/studentlist/index'

interface MyProps { }
interface MyState { }

export class HomeView extends React.Component<MyProps, MyState> {
    render() {
        return <div>
            <h1>Home Run</h1>
            <Students label=''/>
        </div>
    }
}

