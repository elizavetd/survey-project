import React from 'react'

const TextUserResult = ({ result, question }) => (
	<article className="survey-results__question-result survey-results__question-result_text-answer">
		<h4 className="survey-results__question-title">{question}</h4>
		{result
			? <p className="survey-results__answer-percentage">{result}</p>
			: <p className="survey-results__no-answer">Пользователь не ответил на этот вопрос</p>
		}
	</article>
)

export default TextUserResult;