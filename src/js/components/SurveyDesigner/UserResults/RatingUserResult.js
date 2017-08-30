import React from 'react'

import Stars from '../RatingStars'

const RatingUserResult = ({ result, question }) => (
	<article className="survey-results__question-result survey-results__question-result_rating">
		<h4 className="survey-results__question-title">{question}</h4>
		{result 
			? <Stars amount = {result} />
			: <p className="survey-results__no-answer">Пользователь не ответил на этот вопрос</p>
		}
	</article>
)

export default RatingUserResult;