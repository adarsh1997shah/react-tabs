import React from 'react';
import './form.css';

class Form extends React.Component {
	constructor() {
		super();

		this.state = {
			questions: [
				{
					ques: "Please enter the dimensions of the room.",
					anstype: "text",
					placeholder: "dimensions",
					answer: '',
				},
				{
					ques: "Please upload the image file of the room below.",
					anstype: "file",
					answer: '',
				},
				{
					ques: "Is electrical work required in drawing room?",
					anstype: "decision",
					answer: '',
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
		console.log(this.state);
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
													<div><input value={ this.state.questions[index].answer } type={ q.anstype } id={index} onChange={ this.handleAnswer } /></div>
													:
													''
											}
											{
												q.anstype === 'decision'?
													<div>
														<button type="button" className="yes">Yes</button>
														<button type="button" className="no">No</button>
													</div>
													:
													''
											}
											{
												q.anstype === 'file'?
													<div><input type={q.anstype} id={index} /></div>
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