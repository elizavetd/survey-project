import React from 'react'

const FileUserResult = ({ result }) => (
	<article className="survey-results__question-result survey-results__question-result_file">
		<h4 className="survey-results__question-title">Вопрос-файл</h4>
		<a href="#" className="survey-results__answer-percentage">{result}</a>
	</article>
)

export default FileUserResult;