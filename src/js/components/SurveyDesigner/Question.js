import React from 'react'
// import { connect } from 'react-redux'
// import { store } from '../../store'
// import { addAnswer } from '../../actions/questionActions'

import OneAnswerQuestion from './QuestionTypes/OneAnswerQuestion'
import MultipleAnswersQuestion from './QuestionTypes/MultipleAnswersQuestion'
import TextQuestion from './QuestionTypes/TextQuestion'
import FileQuestion from './QuestionTypes/FileQuestion'
import RatingQuestion from './QuestionTypes/RatingQuestion'
import ScaleQuestion from './QuestionTypes/ScaleQuestion'

export default class Question extends React.Component {	
	constructor() {
		super();
		this.state = {
			page: 1,
			surveyList: undefined,
		}
	}

  	render() {
		const { 
			type, id, question, options, isFirst, answersEnabled, userId,
			insertClick, deleteClick, notifySaving, addQuestionAnswer } = this.props;

		return (
			<div>
				{ (type === 'oneAnswer') && 
					<OneAnswerQuestion 
						id = {id}
						userId = {userId}
						question = {question}
						options = {options}
						isFirst = {isFirst} 
						insertClick = {insertClick}
						deleteClick = {deleteClick}
						notifySaving = {notifySaving}
						answersEnabled = {answersEnabled}
						addQuestionAnswer = {addQuestionAnswer}
					/> 
				}
				{ (type === 'severalAnswers') && 
					<MultipleAnswersQuestion 
						id = {id}
						userId = {userId}
						question = {question}
						options = {options}
						isFirst = {isFirst} 
						insertClick = {insertClick}
						deleteClick = {deleteClick}
						notifySaving = {notifySaving}
						answersEnabled = {answersEnabled}
						addQuestionAnswer = {addQuestionAnswer}
					/>
				}
				{ (type === 'text') && 
					<TextQuestion 
						id = {id}
						userId = {userId}
						question = {question}
						isFirst = {isFirst} 
						insertClick = {insertClick}
						deleteClick = {deleteClick}
						notifySaving = {notifySaving}
						answersEnabled = {answersEnabled}
						addQuestionAnswer = {addQuestionAnswer}
					/>
				}
				{ (type === 'file') && 
					<FileQuestion 
						id = {id}
						userId = {userId}
						question = {question}
						isFirst = {isFirst} 
						insertClick = {insertClick}
						deleteClick = {deleteClick}
						notifySaving = {notifySaving}
						answersEnabled = {answersEnabled}
						addQuestionAnswer = {addQuestionAnswer}
					/>
				}
				{ (type === 'rating') && 
					<RatingQuestion 
						id = {id}
						userId = {userId}
						question = {question}
						isFirst = {isFirst} 
						insertClick = {insertClick}
						deleteClick = {deleteClick} 
						notifySaving = {notifySaving}
						answersEnabled = {answersEnabled}
						addQuestionAnswer = {addQuestionAnswer}
					/>
				}
				{ (type === 'scale') && 
					<ScaleQuestion 
						id = {id}
						userId = {userId}
						question = {question}
						isFirst = {isFirst} 
						insertClick = {insertClick}
						deleteClick = {deleteClick}
						notifySaving = {notifySaving}
						answersEnabled = {answersEnabled}
						addQuestionAnswer = {addQuestionAnswer}
					/>
				}
			</div>
		);
 	}
}


