import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {FormParent} from './FormParent'
import Navbar from '../node_modules/react-bootstrap/lib/Navbar'
import Nav from '../node_modules/react-bootstrap/lib/Nav'
import NavItem from '../node_modules/react-bootstrap/lib/NavItem'
import MenuItem from '../node_modules/react-bootstrap/lib/MenuItem'
import NavDropdown from '../node_modules/react-bootstrap/lib/NavDropdown'





class App extends Component {

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hackathon Project</h1>
        </header>

        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">React-Bootstrap</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Link Right
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link Right
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>;
        <FormParent />
      </div>
    );
  }
}

export default App;
