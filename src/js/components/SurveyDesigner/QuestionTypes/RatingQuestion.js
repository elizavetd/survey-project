import React from 'react'

import EditButtons from '../EditButtons'

const RatingQuestion = ({ isFirst }) => (
    <article className={(isFirst) 
        && "survey-body__question survey-body__question_rating survey-body__question_first"
        || "survey-body__question survey-body__question_rating"
     }>
		<button className="survey-body__add-button survey-body__add-button_above-question"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
		<EditButtons />
		<div className="survey-body__question-view">
			<h4>Напишите свой вопрос здесь...</h4>
			<div className="rating-stars">
				<i className="fa fa-star" aria-hidden="true"></i>
				<i className="fa fa-star-o" aria-hidden="true"></i>
				<i className="fa fa-star-o" aria-hidden="true"></i>
				<i className="fa fa-star-o" aria-hidden="true"></i>
				<i className="fa fa-star-o" aria-hidden="true"></i>
			</div>
		</div>
	</article>
)

export default RatingQuestion;