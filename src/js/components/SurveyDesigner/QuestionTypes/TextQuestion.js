import React from 'react'

import EditButtons from '../EditButtons'

const TextQuestion = ({ isFirst }) => (
    <article className={(isFirst) 
        && "survey-body__question survey-body__question_text-answer survey-body__question_first"
        || "survey-body__question survey-body__question_text-answer"
     }>
		<button className="survey-body__add-button survey-body__add-button_above-question"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
		<EditButtons />
		<div className="survey-body__question-view">
			<h4>Напишите свой вопрос здесь...</h4>
			<textarea placeholder="Введите ответ..."></textarea>
		</div>
	</article>
)

export default TextQuestion;