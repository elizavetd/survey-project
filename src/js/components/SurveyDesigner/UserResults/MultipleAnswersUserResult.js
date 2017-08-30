import React from 'react'

const MultipleAnswersUserResult = ({ results, question }) => (
	<article className="survey-results__question-result survey-results__question-result_several-answers">
		<h4 className="survey-results__question-title">{question}</h4>
		{results
			? <div className="survey-results__answer-percentage">
				{results.map(result => <p key = {`${result}_${(Math.random() * 10000).toFixed()}`}>{result}</p>)}
			</div>
			: <p className="survey-results__no-answer">Пользователь не ответил на этот вопрос</p>
		}
	</article>
)

export default MultipleAnswersUserResult;