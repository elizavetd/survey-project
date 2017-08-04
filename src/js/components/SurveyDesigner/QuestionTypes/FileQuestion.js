import React from 'react'

import EditButtons from '../EditButtons'

const FileQuestion = ({ isFirst }) => (
    <article className={(isFirst) 
        && "survey-body__question survey-body__question_file survey-body__question_first"
        || "survey-body__question survey-body__question_file"
     }>
		<button className="survey-body__add-button survey-body__add-button_above-question"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
		<EditButtons />
		<div className="survey-body__question-view">
			<h4>Напишите свой вопрос здесь...</h4>
			<button>Файл</button>
			<label>C:/project/pictures/img.jpg</label>
		</div>
	</article>
)

export default FileQuestion;