import React from 'react'

import Stars from '../RatingStars'

const RatingUserResult = ({ result }) => (
	<article className="survey-results__question-result survey-results__question-result_rating">
		<h4 className="survey-results__question-title">Вопрос-рейтинг</h4>
		<Stars amount = {result} />
	</article>
)

export default RatingUserResult;