import React from 'react'

const Stars = ({ amount }) => (
	<div className="survey-results__answer-percentage" className="rating-stars">
		{(amount > 0) && <i className="fa fa-star" aria-hidden="true"></i>}
		{(amount > 1) && <i className="fa fa-star" aria-hidden="true"></i>}
		{(amount > 2) && <i className="fa fa-star" aria-hidden="true"></i>}
		{(amount > 3) && <i className="fa fa-star" aria-hidden="true"></i>}
		{(amount > 4) && <i className="fa fa-star" aria-hidden="true"></i>}

		{(5 - amount > 0) && <i className="fa fa-star-o" aria-hidden="true"></i>}
		{(5 - amount > 1) && <i className="fa fa-star-o" aria-hidden="true"></i>}
		{(5 - amount > 2) && <i className="fa fa-star-o" aria-hidden="true"></i>}
		{(5 - amount > 3) && <i className="fa fa-star-o" aria-hidden="true"></i>}
		{(5 - amount > 4) && <i className="fa fa-star-o" aria-hidden="true"></i>}
	</div>
)

const RatingUserResult = ({ result }) => (
	<article className="survey-results__question-result survey-results__question-result_rating">
		<h4 className="survey-results__question-title">Вопрос-рейтинг</h4>
		<Stars amount = {result} />
	</article>
)

export default RatingUserResult;