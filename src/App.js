import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {FormParent} from './FormParent'

import Tabs from '../node_modules/react-bootstrap/lib/Tabs'
import Tab from '../node_modules/react-bootstrap/lib/Tab'
import {Iframe} from './iframe'
import {SettingsContent} from './SettingsContent'
import {Displayer} from './display'
import {DisplayerNoSound} from './displaynosound'


class App extends Component {


  constructor (props) {
    super(props);

    this.state = {total: 3};

    this.updateTotal = this.updateTotal.bind(this)
  }

  updateTotal(e) {
    e.preventDefault();
    console.log('hi');
    this.setState({total: 5});
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Smart Inhaler</h1>

        </header>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title={<span><i className="material-icons">home</i></span>}>
          <h1> Welcome Back Dan! </h1>
          <h3> Your current risk for an asthma attack is... </h3>
          <DisplayerNoSound total={this.state.total}/>
          <br/>
          <h3> Last Asthma Attack: 6-29-2018 </h3>

          </Tab>
          <Tab eventKey={2} title={<span><i className="material-icons">insert_chart</i></span>}>
          <Iframe height="600" width="800" src={"https://app.powerbi.com/view?r=eyJrIjoiMzBjY2MxYTUtMjBkNS00MDAzLWFkOTEtMzhhYjk0MWMxNjRhIiwidCI6IjdlYWE1ZDRmLTEyYTMtNGMzMS05NzdhLTY3ZGNhNzA0MTEwNiIsImMiOjF9"}/>
          </Tab>
          <Tab eventKey={3} title={<span><i className="material-icons">storage</i></span>}>
          <FormParent />
          </Tab>
          <Tab eventKey={4} title={<span><i className="material-icons">settings</i></span>}>
          <SettingsContent listenFromApp={this.updateTotal} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
