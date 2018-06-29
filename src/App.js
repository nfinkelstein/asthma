import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {FormParent} from './FormParent'
import Navbar from '../node_modules/react-bootstrap/lib/Navbar'
import Nav from '../node_modules/react-bootstrap/lib/Nav'
import NavItem from '../node_modules/react-bootstrap/lib/NavItem'
import MenuItem from '../node_modules/react-bootstrap/lib/MenuItem'
import NavDropdown from '../node_modules/react-bootstrap/lib/NavDropdown'

import Tabs from '../node_modules/react-bootstrap/lib/Tabs'
import Tab from '../node_modules/react-bootstrap/lib/Tab'




class App extends Component {

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hackathon Project</h1>
        </header>
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
          <Tab eventKey={1} title={<span><i className="material-icons">home</i></span>}>
            Tab 1 content
          </Tab>
          <Tab eventKey={2} title={<span><i className="material-icons">insert_chart</i></span>}>
          </Tab>
          <Tab eventKey={3} title={<span><i className="material-icons">storage</i></span>}>
            <FormParent/>
          </Tab>
            <Tab eventKey={4} title={<span><i className="material-icons">settings</i></span>}>
            Tab 3 content
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
