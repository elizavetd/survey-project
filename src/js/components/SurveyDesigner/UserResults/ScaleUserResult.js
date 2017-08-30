import React from 'react'

const ScaleUserResult = ({ result, question }) => (
	<article className="survey-results__question-result survey-results__question-result_scaler">
		<h4 className="survey-results__question-title">{question}</h4>
		{result 
			? <div className="range-slider">
				<input className="range-slider__range" type="range" value={result} readOnly min="0" max="100" />
				<span className="range-slider__value">{result}</span>
			</div>
			: <p className="survey-results__no-answer">Пользователь не ответил на этот вопрос</p>
		}
	</article>
)

export default ScaleUserResult;