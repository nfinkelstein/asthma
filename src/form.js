import React from "react";

export class OurForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {new1: '',
			new2: '',
			new3: '',
			new4: '',
			new5: '',
			new6: ''};
		this.onInputChange = this.onInputChange.bind(this);
	}


	onInputChange(e) {
		this.setState({[e.target.name]: e.target.value});
		this.props.inputHandler(e);
	}

	render(){
		return(
			<form onSubmit={this.props.changeSum}>
			<br/> Age <br/>
			<input type="text" name="new1" value={this.state.new1} onChange={this.onInputChange} />
			<br/> BMI <br/>
			<input type="text" name="new2" value={this.state.new2} onChange={this.onInputChange}/>
			<br/> Heart Rate <br/>
			<input type="text" name="new3" value={this.state.new3} onChange={this.onInputChange}/>
			<br/> Air Quality <br/>
			<input type="text" name="new4" value={this.state.new4} onChange={this.onInputChange}/>
			<br/> Allergen Levels <br/>
			<input type="text" name="new5" value={this.state.new5} onChange={this.onInputChange}/>
			<br/> Temperature <br/>
			<input type="text" name="new6" value={this.state.new6} onChange={this.onInputChange}/>
			<br/> Activity <br/>
			<select>
			<option value="longRunning">Long Distance Running</option>
			<option value="sprints">Sprints</option>
			<option value="heavyLifting">Heavy Lifting</option>
			<option value="swimming">Swimming</option>
			<option value="leisure">Leisure</option>
			</select>
			<br/> <br/>
			<button type="submit" value="Submit">Submit</button>
			</form>);
	}
}