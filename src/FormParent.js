import React, { Component } from 'react';
import {OurForm} from './form';
import {Displayer} from './display'

export class FormParent extends Component {

  constructor(props){
    super(props);
    this.state = {
      total: 0,
      old1:0,
      old2:0,
      old3:0,
      new1:0,
      new2:0,
      new3:0
    };
    this.changeSum = this.changeSum.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  changeSum(e){
    e.preventDefault();

    var old1 = this.state.new1;
    var old2 = this.state.new2;
    var old3 = this.state.new3;
    var newSum = old1 + old2 + old3;
    this.setState({
      total: newSum,
      old1: old1,
      old2: old2,
      old3: old3
    });
  }

  inputHandler(e){
    console.log(e.target.name);
    const target = e.target;
    console.log(target.value);
    this.setState({
      [target.name]: target.value
    });
  }


  render() {
    return (
    	<div>
        <OurForm changeSum={this.changeSum} inputHandler={this.inputHandler}/>
        <Displayer total={this.state.total}/> 
      </div>
    );
  }
}

