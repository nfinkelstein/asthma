import React from 'react'
import {SettingsButton} from './SettingsButton'

export class SettingsContent extends React.Component {
	constructor (props) {
		super(props)

		this.moreUpward = this.moreUpward.bind(this)
	}

	moreUpward (e) {
		console.log('moreUp')
		this.props.listenFromApp(e)
	}

	render() {
		return (
			<div>
			<div>
				<br/>
				<h3> Select your Smart Inhaler </h3>
				<br/>
				<SettingsButton bsStyle="info" name="Dan's Inhaler"/>
				<br/>
				<br/>
				<br/>
				<SettingsButton bsStyle="info"  name="Nico's Inhaler"/>
				<br/>
				<br/>
				<br/>
				<SettingsButton bsStyle="info"  name="Yash's Inhaler"/>
			</div>

			<div>
				<h3> Select your Smart Device </h3>
				<br/>
				<SettingsButton onThing={this.moreUpward} bsStyle="info"  style={{width: 125}} name="Yash Fitbit 1"/>
				<br/>
				<br/>
				<br/>
				<SettingsButton bsStyle="info"  name="Yash Fitbit 2"/>
				<br/>
				<br/>
				<br/>
				<SettingsButton bsStyle="info"  name="Yash Fitbit 3"/>
				<br/>
			</div>
			</div>
		)
	}
}