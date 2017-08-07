import React from 'react'

import NewQuestion from '../QuestionTypes/NewQuestion'
import OneAnswerQuestion from '../QuestionTypes/OneAnswerQuestion'
import MultipleAnswersQuestion from '../QuestionTypes/MultipleAnswersQuestion'
import TextQuestion from '../QuestionTypes/TextQuestion'
import FileQuestion from '../QuestionTypes/FileQuestion'
import RatingQuestion from '../QuestionTypes/RatingQuestion'
import ScaleQuestion from '../QuestionTypes/ScaleQuestion'

export default class StartPage extends React.Component {
  render() {
    return (
    	<section className="survey-body">
			<NewQuestion isChoosingMode = {false} />
			<NewQuestion isChoosingMode = {true} />
				
			<OneAnswerQuestion isFirst = {true} />
			<MultipleAnswersQuestion isFirst = {false} />
			<TextQuestion isFirst = {false} />
			<FileQuestion isFirst = {false} />
			<RatingQuestion isFirst = {false} />
			<ScaleQuestion isFirst = {false} />
	</section>
	);
  }
}


