import React from 'react';

export class Iframe extends React.Component{
	render(){
	return(
		<div height={this.props.src} width={this.props.src} >
		<iframe src={this.props.src} allowFullScreen='true'/>
		</div>)
	}
}