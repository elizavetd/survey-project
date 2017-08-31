import React from 'react'

import ResultTable from '../ResultTable'

const ScaleResult = ({
	question,
	answered,
	skipped,
	results
}) => (
	<article className="survey-results__question-result survey-results__question-result_scale">
		<h4 className="survey-results__question-title">{question}</h4>
		<div className="survey-results__question-info">
			<p>Ответили: {answered}</p>
			<p>Пропустили: {skipped}</p>
		</div>

		{(results.length > 0)
			? <ResultTable results = {results} />
			: <p className="survey-results__no-answer">Никто из пользователей не ответил на этот вопрос.</p>	
		}

		{(results.length > 0) &&
			<div className="survey-results__answer-percentage">
				<p>Средняя оценка: {(results.reduce(function(prev, curr){ 
						return {answer: prev.answer + curr.answer};
					}).answer / answered).toFixed(2)} ({answered} ответов)</p>
			</div>
		}
	</article>
)

export default ScaleResult;