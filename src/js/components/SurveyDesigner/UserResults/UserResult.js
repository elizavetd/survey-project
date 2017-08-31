import React from 'react'

import MultipleAnswersUserResult from './MultipleAnswersUserResult'
import OneAnswerUserResult from './OneAnswerUserResult'
import TextUserResult  from './TextUserResult'
import FileUserResult from './FileUserResult'
import RatingUserResult from './RatingUserResult'
import ScaleUserResult from './ScaleUserResult'

export default class UserResult extends React.Component {	
  	render() {
		const { question, type, result } = this.props;

		return (
			<div className="survey-results__user-result">
				{ (type === 'oneAnswer') && 
					<OneAnswerUserResult question={question} result = {result} />
				}
				{ (type === 'severalAnswers') && 
					<MultipleAnswersUserResult question={question} results = {result} />
				}
				{ (type === 'text') && 
					<TextUserResult question={question} result = {result} />
				}
				{ (type === 'file') && 
					<FileUserResult question={question} result = {result} />
				}
				{ (type === 'rating') && 
					<RatingUserResult question={question} result = {result} />
				}
				{ (type === 'scale') && 
					<ScaleUserResult question={question} result = {result} />
				}
			</div>
		);
 	}
}


