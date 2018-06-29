import React from 'react'
import Button from '../node_modules/react-bootstrap/lib/Button'

export class SettingsButton extends React.Component {


	constructor(props) {
		super(props)

		this.upward = this.upward.bind(this);
	}

	upward(e) {
		console.log('upwardddd');
		this.props.onThing(e);
		console.log('hasdf');
	}

	render () {
		return (
			<Button onClick={this.upward} bsStyle={this.props.bsStyle}>{this.props.name}</Button>
		)
	}
}