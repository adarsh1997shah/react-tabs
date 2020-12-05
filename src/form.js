import React from 'react';
import './Form.css';

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			questions: [
				{
					ques: "Please enter the dimensions of the room.",
					anstype: "text",
					placeholder: "dimensions",
				},
				{
					ques: "Please upload the image file of the room below.",
					anstype: "file",
				},
				{
					ques: "Is electrical work required in drawing room?",
					anstype: "radio",
				}
			],
			current: 0,
			up: -1,
			down: 1,
		}
	}

	handleDown = () => {
		let { current, up, down } = this.state;

		if( down < this.state.questions.length ) {
			up = current;
			current = down;
			down += 1;
		}

		this.setState( { current, up, down } );
	}

	handleUp = () => {
		let { current, up, down } = this.state;

		if( up >= 0 ) {
			down = current;
			current = up;
			up -= 1;
		}

		this.setState( { current, up, down } );
	}

	handleAnswer = (e) => {
		let {questions} = this.state;

		questions[e.target.id].answer = e.target.value;

		this.setState( { questions } );
	}

	render() {
		return (
			<React.Fragment>
				<div className="question-container">
					<form>
						{
							this.state.questions.map( ( q, index ) => {
								return (
									<div key={ index } className={'question ' + (this.state.current === index? 'current ':'') + (this.state.up === index? 'up ':'') + (this.state.down === index? 'down':'')}>
										<div className={ `q${index}` }>
											<h3>{ q.ques }</h3>
											{
												q.anstype === 'text'?
													<div>
														<input type={ q.anstype } id={index}  name={`ans${index}`} />
													</div>
													:
													''
											}
											{
												q.anstype === 'radio'?
													<div>
														<input
															type="radio"
															name={`ans${index}` }
															className="yes"
															value="yes"
														/>
														Yes
														<input 
															type="radio"
															name={`ans${index}`}
															className="no"
															value="no"
														/>
														No
													</div>
													:
													''
											}
											{
												q.anstype === 'file'?
													<div><input type={q.anstype} id={index} name={`ans${index}`} /></div>
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