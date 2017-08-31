import React from 'react'
import countPercent from '../../../lib/percentage'

import BarChart from '../BarChart'

const RatingResult = ({
	question,
	answered,
	skipped,
	results
}) => (
	<article className="survey-results__question-result survey-results__question-result_rating">
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
				<p>☆: {countPercent(results[0].value, answered)}% ({results[0].value} ответов)</p>
				<p>☆☆: {countPercent(results[1].value, answered)}% ({results[1].value} ответов)</p>
				<p>☆☆☆: {countPercent(results[2].value, answered)}% ({results[2].value} ответов)</p>
				<p>☆☆☆☆: {countPercent(results[3].value, answered)}% ({results[3].value} ответов)</p>
				<p>☆☆☆☆☆: {countPercent(results[4].value, answered)}% ({results[4].value} ответов)</p>
			</div>
		}
	</article>
)

export default RatingResult;