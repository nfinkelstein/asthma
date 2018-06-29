import React from "react";
import soundFile from './alert.mp3';

export class DisplayerNoSound extends React.Component{

	render(){
		var red = 25.5 * parseFloat(this.props.total);
		var grn = 255 - red;

		var rval = red.toString();
		var gval = grn.toString();
		var rgbpass = "rgb(" + rval + "," + gval + ",0)";


		return (
			<div id="circle" style={{background:rgbpass}}>
			<h1> {Math.trunc(this.props.total)} </h1>
			</div>
			)
	};
}