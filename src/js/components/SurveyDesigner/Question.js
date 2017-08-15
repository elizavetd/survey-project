import React from 'react'

import OneAnswerQuestion from './QuestionTypes/OneAnswerQuestion'
import MultipleAnswersQuestion from './QuestionTypes/MultipleAnswersQuestion'
import TextQuestion from './QuestionTypes/TextQuestion'
import FileQuestion from './QuestionTypes/FileQuestion'
import RatingQuestion from './QuestionTypes/RatingQuestion'
import ScaleQuestion from './QuestionTypes/ScaleQuestion'

export default class Question extends React.Component {			
  	render() {
		const { type } = this.props;

		return (
			<div>
				{ (type === 'oneAnswer') && <OneAnswerQuestion isFirst = {true} /> }
				{ (type === 'severalAnswers') && <MultipleAnswersQuestion isFirst = {false} />}
				{ (type === 'text') && <TextQuestion isFirst = {false} />}
				{ (type === 'file') && <FileQuestion isFirst = {false} />}
				{ (type === 'rating') && <RatingQuestion isFirst = {false} />}
				{ (type === 'scale') && <ScaleQuestion isFirst = {false} />    }
			</div>
		);
 	}
}


