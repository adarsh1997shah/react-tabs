import React from 'react';
import './form.css';

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			questions: [
				{
					num: 1,
					ques: "Thanks for finding us. What's your first name? *.",
					placeholder: "Type your answer here",
				},
				{
					num: 2,
					ques: "Are you interested in a solution for yourself, a team, or a client? *.",
				},
				{
					num: 3,
					ques: "What you would you be using our solution for?",
				},
				{
					num: 4,
					ques: "How many people would require access to the project?*",
				}
			],
			current: 0,
		}
	}

	handleDown = () => {
		let { current } = this.state;

		if( Math.abs(current) < this.state.questions.length - 1 ) {
			current--;
		}

		this.setState( { current } );
	}

	handleUp = () => {
		let { current } = this.state;

		if( current < 0 ) {
			current++;
		}

		this.setState( { current } );
	}

	render() {
		return (
			<React.Fragment>
				<div className="question-container">
					<form autoComplete="off">
						{
							this.state.questions.map( ( q, index ) => {
								return (
									<div key={ index } className='question'

									style={{transform: `translateY(${(index + this.state.current) * 100}%)`}}
									>
										<div className={ `q${index}` }>
											<h3><span>{ `${q.num} `}</span>&rarr;{` ${q.ques}` }</h3>
											{
												index === 0?
													<div style={{margin: '15px 0'}}>
														<input type={ q.anstype } id={index} type="text" name={`ans${index}`} placeholder={q.placeholder}/>
													</div>
													:
													''
											}
											{
												index === 1?
													<div style={{margin: '15px 0'}}>
														<label>
															<span>
															<input
																type="radio"
																name={`ans${index}` }
																value="myself"
															/>
															<span>Myself</span>
															</span>
														</label>
														<label>
															<span>
															<input
																type="radio"
																name={`ans${index}` }
																value="team"
															/>
															<span>A team</span>
															</span>
														</label>
														<label>
															<span>
															<input
																type="radio"
																name={`ans${index}` }
																value="client"
															/>
															<span>A client</span>
															</span>
														</label>
													</div>
													:
													''
											}
											{
												index === 2?
													<div style={{margin: '15px 0'}}>
														<select>
															<option>Select an option</option>
															<option>Audience Engagement</option>
															<option>Customer Research</option>
															<option>Employee Operation</option>
															<option>Improving a product or a service</option>
															<option>Lead generation</option>
														</select>
													</div>
													:
													''
											}
											{
												index === 3?
													<div id={`ques${index}`} style={{margin: '15px 0'}}>
													<label style={{

													}}>
															<span>
															<input
																type="radio"
																name={`ans${index}` }
																value="myself"
															/>
															<span>5 or less</span>
															</span>
														</label>
														<label>
															<span>
															<input
																type="radio"
																name={`ans${index}` }
																value="team"
															/>
															<span>6 - 20</span>
															</span>
														</label>
														<label>
															<span>
															<input
																type="radio"
																name={`ans${index}` }
																value="client"
															/>
															<span>More than 20</span>
															</span>
														</label>
													</div>
													:
													''
											}
											<button type="button" className="next" onClick={ this.handleDown }>Ok</button>
										</div>
									</div>
								)
							} )
						}

						<div className="controls-container">
							<button type="button" className="up" onClick={ this.handleUp }>Up</button>
							<button type="button" className="down" onClick={ this.handleDown }>Down</button>
						</div>
					</form>
				</div>
			</React.Fragment>
		);
	}
}


export default Form;