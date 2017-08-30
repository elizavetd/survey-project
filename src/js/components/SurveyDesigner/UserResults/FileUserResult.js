import React from 'react'

const FileUserResult = ({ result, question }) => (
	<article className="survey-results__question-result survey-results__question-result_file">
		<h4 className="survey-results__question-title">{question}</h4>
		{result
			? <a href="#" className="survey-results__answer-percentage">{result}</a>
			: <p className="survey-results__no-answer">Пользователь не ответил на этот вопрос</p>
		}
	</article>
)

export default FileUserResult;