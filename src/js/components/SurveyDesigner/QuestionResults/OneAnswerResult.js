import React from 'react'
import countPercent from '../../../lib/percentage'

import BarChart from '../BarChart'

const OneAnswerResult = ({
    answered,
    skipped,
    results
}) => (
    <article className="survey-results__question-result survey-results__question-result_one-answer">
		<h4 className="survey-results__question-title">Вопрос с одним вариантом ответа</h4>
		<div className="survey-results__question-info">
			<p>Ответили: {answered}</p>
			<p>Пропустили: {skipped}</p>
		</div>
        <BarChart results = {results} answered={answered}/>
		{console.log(results)}
		<div className="survey-results__answer-percentage">
            {results.map((result, i) => 
                <p key={result.option.charCodeAt(0) / Math.random()}>
                    {i+1}. {result.option}: {countPercent(result.value, answered)}% ({result.value} ответов)
                </p>
            )}
		</div>
	</article>
)

export default OneAnswerResult;