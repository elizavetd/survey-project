import React from 'react'
import countPercent from '../../../lib/percentage'

import BarChart from '../BarChart'

const MultipleAnswersResult = ({
    answered,
    skipped,
    results
}) => (
    <article className="survey-results__question-result survey-results__question-result_several-answers">
		<h4 className="survey-results__question-title">Вопрос с несколькими вариантами ответа</h4>
		<div className="survey-results__question-info">
			<p>Ответили: {answered}</p>
			<p>Пропустили: {skipped}</p>
		</div>
        <BarChart results = {results} answered={answered}/>
		<div className="survey-results__answer-percentage">
            {results.map((result, i) => 
                <p key={result.option.charCodeAt(0) / Math.random()}>
                    {i+1}. {result.option}: {countPercent(result.value, answered)}% ({result.value} ответов)
                </p>
            )}
		</div>
	</article>
)

export default MultipleAnswersResult;