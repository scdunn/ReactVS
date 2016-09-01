import * as React from 'react'
import * as redux from 'redux'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

import { Students } from '../../components/studentlist/component'
import { browserHistory, Link } from 'react-router'

interface MyProps { }
interface MyState { }


export class App extends React.Component<MyProps, MyState> {
    
    handleSelect(selectedKey:any) {
        browserHistory.push(selectedKey);
    }

    render() {
        return <div>
            <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/about">Student List</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav onSelect={this.handleSelect}>
                <NavItem eventKey={'/'}>Home</NavItem>
                <NavItem eventKey={'/about'}>About</NavItem>
                <NavItem eventKey={'/help'}>Help</NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar>
            {this.props.children}
        </div>
    }
}

