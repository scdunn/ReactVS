import * as React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

import { browserHistory, Link } from 'react-router'


export class App extends React.Component<any, {}> {
    
    handleSelect(selectedKey:any) {
        browserHistory.push(selectedKey);
    }

    render() {
        return <div>
            <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/about">Classified Ads</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav onSelect={this.handleSelect}>
                <NavItem eventKey={'/app'}>Home</NavItem>
                <NavItem eventKey={'/app/about'}>About</NavItem>
                <NavItem eventKey={'/app/ads'}>Ads</NavItem>
                <NavItem eventKey={'/app/login'}>Login</NavItem>
            </Nav>
        </Navbar>
            {this.props.children}
        </div>
    }
}

