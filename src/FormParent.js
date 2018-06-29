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
      old4:0,
      old5:0,
      old6:0,
      new1:0,
      new2:0,
      new3:0,
      new4:0,
      new5:0,
      new6:0
    };
    this.changeSum = this.changeSum.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  changeSum(e){
    e.preventDefault();

    var old1 = parseFloat(this.state.new1);
    var old2 = parseFloat(this.state.new2);
    var old3 = parseFloat(this.state.new3);
    var old4 = parseFloat(this.state.new4);
    var old5 = parseFloat(this.state.new5);
    var old6 = parseFloat(this.state.new6);
    var newSum = old1*.02 + old2*.06 + old3*.017 + old5*.030 + old6*.03;
    if (newSum>10){
      newSum = 10;
    }
    this.setState({
      total: newSum,
      old1: old1,
      old2: old2,
      old3: old3,
      old4: old4,
      old5: old5,
      old6: old6
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

