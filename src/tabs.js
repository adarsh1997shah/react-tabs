import React from 'react';
import Form from './Form';
import './Tabs.css';


class Tabs extends React.Component {
	constructor() {
		super();

		this.state = {
			tabs: ['Bedroom1', 'Bedroom2', 'Bedroom3', 'Bedroom4'],
			selected: 0,
		}
	}

	handleSelectTab = (e) => {
		this.setState( { selected: parseInt(e.target.id) } );
	}

	render() {
		return (
			<React.Fragment>
				<div className="tabs-container">
					{
						this.state.tabs.map( (val, index) => {
							return (
								<button key={index} id={index} className={"tab" + (this.state.selected === index? ' active' : '')} data-target={`form${index}`} onClick={ this.handleSelectTab }>{val}</button>
							)
						} )
					}
				</div>
				<div className="question-wrapper">
					{
						this.state.tabs.map( (val, index) => {
							if( index === this.state.selected ) {
								return (
									<Form key={index} />
								)
							}
						} )
					}
				</div>
			</React.Fragment>
		)
	}
}


export default Tabs;