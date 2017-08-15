import React from 'react'

import EditButtons from '../EditButtons'

const OneAnswerQuestion = ({ 
	isFirst,
	question,
	options,
	insertClick,
	deleteClick
}) => (
    <article className={(isFirst) 
        && "survey-body__question survey-body__question_one-answer survey-body__question_first"
        || "survey-body__question survey-body__question_one-answer"
     }>
		<button onClick={insertClick} className="survey-body__add-button survey-body__add-button_above-question"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
		<EditButtons 
	 		deleteClick = {deleteClick}
		/>
		<div className="survey-body__question-view">
			<h4>Напишите свой вопрос здесь...</h4>
			<p>
				<input type="radio" id="c1" name="cb" />
				<label htmlFor="c1">Вариант 1</label>
			</p>
			<p>
				<input type="radio" id="c2" name="cb" />
				<label htmlFor="c2">Вариант 2</label>
			</p>
			<p>
				<input type="radio" id="c3" name="cb" />
				<label htmlFor="c3">Вариант 3</label>
			</p>
		</div>
	</article>
)

export default OneAnswerQuestion;