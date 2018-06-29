import React from "react";

export class OurForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {new1: '',
			new2: '',
			new3: ''};
		this.onInputChange = this.onInputChange.bind(this);
	}


	onInputChange(e) {
		this.setState({[e.target.name]: e.target.value});
		this.props.inputHandler(e);
	}

	render(){
		return(
			<form onSubmit={this.props.changeSum}>
			<br/> Num1 <br/>
			<input type="text" name="new1" value={this.state.new1} onChange={this.onInputChange} />
			<br/> Num2 <br/>
			<input type="text" name="new2" value={this.state.new2} onChange={this.onInputChange}/>
			<br/> Num3 <br/>
			<input type="text" name="new3" value={this.state.new3} onChange={this.onInputChange}/>
			<br/> <br/>
			<button type="submit" value="Submit">Submit</button>
			</form>);
	}
}