import React from 'react'

const MultipleAnswersUserResult = ({ results }) => (
	<article className="survey-results__question-result survey-results__question-result_several-answers">
		<h4 className="survey-results__question-title">Вопрос с несколькими вариантами ответа</h4>
		<div className="survey-results__answer-percentage">
			{results.map(result => <p key = {`${result}_${(Math.random() * 10000).toFixed()}`}>Ответ {result}</p>)}
		</div>
	</article>
)

export default MultipleAnswersUserResult;