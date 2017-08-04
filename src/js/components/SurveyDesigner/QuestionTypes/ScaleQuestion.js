import React from 'react'

import EditButtons from '../EditButtons'

const ScaleQuestion = ({ isFirst }) => (
    <article className={(isFirst) 
        && "survey-body__question survey-body__question_scale survey-body__question_first"
        || "survey-body__question survey-body__question_scale"
     }>
		<button className="survey-body__add-button survey-body__add-button_above-question"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
		<EditButtons />
		<div className="survey-body__question-view">
			<h4>Напишите свой вопрос здесь...</h4>
			<div className="range-slider">
				<input className="range-slider__range" type="range" defaultValue="50" min="0" max="100" />
				<span className="range-slider__value">50</span>
			</div>
		</div>
	</article>
)

export default ScaleQuestion;