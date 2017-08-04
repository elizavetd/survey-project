import React from 'react'

import EditButtons from '../EditButtons'

const MultipleAnswersQuestion = ({ isFirst }) => (
    <article className={(isFirst) 
        && "survey-body__question survey-body__question_several-answers survey-body__question_first"
        || "survey-body__question survey-body__question_several-answers"
     }>
		
		<button className="survey-body__add-button survey-body__add-button_above-question"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
		<EditButtons />
		<div className="survey-body__question-view">
			<h4>Напишите свой вопрос здесь...</h4>
			<p>
				<input type="checkbox"/>
				<label htmlFor="">Вариант 1</label>
			</p>
			<p>
				<input type="checkbox" />
				<label htmlFor="">Вариант 2</label>
			</p>
			<p>
				<input type="checkbox" />
				<label htmlFor="">Вариант 3</label>
			</p>
		</div>
	</article>
)

export default MultipleAnswersQuestion;