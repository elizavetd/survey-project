import React from 'react'

import MultipleAnswersResult from './MultipleAnswersResult'
import OneAnswerResult from './OneAnswerResult'
import TextResult  from './TextResult'
import FileResult from './FileResult'
import RatingResult from './RatingResult'
import ScaleResult from './ScaleResult'

export default class Result extends React.Component {	
  	render() {
		const { type, question, answered, all, results } = this.props;

		//console.log(result)

		return (
			<div className="survey-results__user-result">
				{ (type === 'oneAnswer') && 
					<OneAnswerResult 
						question = {question}
						answered = {answered}
						skipped = {all - answered}
						results = {results}
					/>
				}
				{ (type === 'severalAnswers') && 
					<MultipleAnswersResult 
						question = {question}
						answered = {answered}
						skipped = {all - answered}
						results = {results}
					/>
				}
				{ (type === 'text') && 
					<TextResult
						question = {question}
						answered = {answered}
						skipped = {all - answered}
						results = {results}
					/>
				}
				{ (type === 'file') && 
					<FileResult
						question = {question}
						answered = {answered}
						skipped = {all - answered}
						results = {results}
					/>
				}
				{ (type === 'rating') && 
					<RatingResult
						question = {question}
						answered = {answered}
						skipped = {all - answered}
						results = {results}
					/>
				}
				{ (type === 'scale') && 
					<ScaleResult
						question = {question}
						answered = {answered}
						skipped = {all - answered}
						results = {results}
					/>
				}
			</div>
		);
 	}
}


