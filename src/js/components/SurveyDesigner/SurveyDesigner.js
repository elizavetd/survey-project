import React from 'react'

import Options from './Options'
import NewQuestion from './NewQuestion'
import OneAnswerQuestion from './QuestionTypes/OneAnswerQuestion'
import MultipleAnswersQuestion from './QuestionTypes/MultipleAnswersQuestion'
import TextQuestion from './QuestionTypes/TextQuestion'
import FileQuestion from './QuestionTypes/FileQuestion'
import RatingQuestion from './QuestionTypes/RatingQuestion'
import ScaleQuestion from './QuestionTypes/ScaleQuestion'

const SurveysDesigner = ({ match }) => (
    <div className="content">
		<div className="survey-editing">
            <Options position='left' url={match.url} />

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

            <Options position='right' url={match.url} />
		</div>
	</div>
)

export default SurveysDesigner;
