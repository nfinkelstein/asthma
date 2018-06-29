import React from "react";

export class Displayer extends React.Component{
	render(){
		return (<h1> {this.props.total} </h1>)
	};
}