import React from 'react'

const ScaleUserResult = ({result}) => (
	<article className="survey-results__question-result survey-results__question-result_scaler">
		<h4 className="survey-results__question-title">Вопрос-шкала</h4>
		<div className="range-slider">
			<input className="range-slider__range" type="range" value={result} readOnly min="0" max="100" />
			<span className="range-slider__value">{result}</span>
		</div>
	</article>
)

export default ScaleUserResult;