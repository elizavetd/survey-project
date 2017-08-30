import React from 'react'

export default class Stars extends React.Component {
	constructor() {
		super();

		this.state = {
			filledStars: 0
		};
		
		this.handleAnswer = this.handleAnswer.bind(this);
		this.handleMouseOver = this.handleMouseOver.bind(this);
	}

	handleAnswer(e) {
		this.setState({
			filledStars: e.target.dataset.index
		});

		this.props.addQuestionAnswer(this.props.id, e.target.dataset.index);
	}

	handleMouseOver(e) {
		e.target.style.cursor = 'pointer'	
	}

	render() {
		let {id, amount, addQuestionAnswer, answersEnabled} = this.props;
		if (!answersEnabled) {
			this.state.filledStars = amount;
		}

		return (
			<div className="survey-results__answer-percentage" className="rating-stars">
				{(this.state.filledStars > 0) && 
					<i
						onClick={answersEnabled && this.handleAnswer}
						onMouseOver = {answersEnabled && this.handleMouseOver}
						data-index={1}
						className="fa fa-star"
						aria-hidden="true" 
					/>
				}
				{(this.state.filledStars > 1) && 
					<i
						onClick={answersEnabled && this.handleAnswer}
						onMouseOver = {answersEnabled && this.handleMouseOver}
						data-index={2}
						className="fa fa-star"
						aria-hidden="true"
					/>
				}
				{(this.state.filledStars > 2) && 
					<i
						onClick={answersEnabled && this.handleAnswer}
						onMouseOver = {answersEnabled && this.handleMouseOver}
						data-index={3}
						className="fa fa-star"
						aria-hidden="true"
					/>
				}
				{(this.state.filledStars > 3) && 
					<i 
						onClick={answersEnabled && this.handleAnswer}
						onMouseOver = {answersEnabled && this.handleMouseOver}
						data-index={4}
						className="fa fa-star"
						aria-hidden="true"
					/>
				}
				{(this.state.filledStars > 4) && 
					<i 
						onClick={answersEnabled && this.handleAnswer}
						onMouseOver = {answersEnabled && this.handleMouseOver}
						data-index={5}
						className="fa fa-star"
						aria-hidden="true"
					/>
				}
		
				{(5 - this.state.filledStars > 0) && 
					<i
						onClick={answersEnabled && this.handleAnswer}
						onMouseOver = {answersEnabled && this.handleMouseOver}
						data-index={+this.state.filledStars + 1}
						className="fa fa-star-o"
						aria-hidden="true"
					/>
				}
				{(5 - this.state.filledStars > 1) && 
					<i
						onClick={answersEnabled && this.handleAnswer}
						onMouseOver = {answersEnabled && this.handleMouseOver}
						data-index={+this.state.filledStars + 2}
						className="fa fa-star-o"
						aria-hidden="true"
					/>
				}
				{(5 - this.state.filledStars > 2) && 
					<i
						onClick={answersEnabled && this.handleAnswer}
						onMouseOver = {answersEnabled && this.handleMouseOver}
						data-index={+this.state.filledStars + 3}
						className="fa fa-star-o"
						aria-hidden="true"
					/>
				}
				{(5 - this.state.filledStars > 3) && 
					<i
						onClick={answersEnabled && this.handleAnswer}
						onMouseOver = {answersEnabled && this.handleMouseOver}
						data-index={+this.state.filledStars + 4}
						className="fa fa-star-o"
						aria-hidden="true"
					/>
				}
				{(5 - this.state.filledStars > 4) && 
					<i
						onClick={answersEnabled && this.handleAnswer}
						onMouseOver = {answersEnabled && this.handleMouseOver}
						data-index={+this.state.filledStars + 5}
						className="fa fa-star-o"
						aria-hidden="true"
					/>
				}
			</div>
		)
	}
}; 
