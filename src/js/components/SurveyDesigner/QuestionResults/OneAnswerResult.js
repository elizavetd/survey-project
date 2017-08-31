import React from 'react'
import countPercent from '../../../lib/percentage'

import BarChart from '../BarChart'

const OneAnswerResult = ({
	question,
	answered,
	skipped,
	results
}) => (
	<article className="survey-results__question-result survey-results__question-result_one-answer">
		<h4 className="survey-results__question-title">{question}</h4>
		<div className="survey-results__question-info">
			<p>Ответили: {answered}</p>
			<p>Пропустили: {skipped}</p>
		</div>
		{(results.length > 0) 
			? <BarChart results = {results} answered={answered}/>
			: <p className="survey-results__no-answer">Никто из пользователей не ответил на этот вопрос.</p>
		}
		{(results.length > 0) && 
			<div className="survey-results__answer-percentage">
				{results.map((result, i) => 
					<p key={result.option.charCodeAt(0) / Math.random()}>
						{i+1}. {result.option}: {countPercent(result.value, answered)}% ({result.value} ответов)
					</p>
				)}
			</div>
		}
	</article>
)

export default OneAnswerResult;