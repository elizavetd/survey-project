import React from 'react'

import OneAnswerQuestion from './QuestionTypes/OneAnswerQuestion'
import MultipleAnswersQuestion from './QuestionTypes/MultipleAnswersQuestion'
import TextQuestion from './QuestionTypes/TextQuestion'
import FileQuestion from './QuestionTypes/FileQuestion'
import RatingQuestion from './QuestionTypes/RatingQuestion'
import ScaleQuestion from './QuestionTypes/ScaleQuestion'

export default class Question extends React.Component {			
  	render() {
		const { 
			type, id, question, options, isFirst, answersEnabled,
			insertClick, deleteClick, notifySaving } = this.props;

		return (
			<div>
				{ (type === 'oneAnswer') && 
					<OneAnswerQuestion 
						id = {id}
						question = {question}
						options = {options}
						isFirst = {isFirst} 
						insertClick = {insertClick}
						deleteClick = {deleteClick}
						notifySaving = {notifySaving}
						answersEnabled = {answersEnabled}
					/> 
				}
				{ (type === 'severalAnswers') && 
					<MultipleAnswersQuestion 
						id = {id}
						question = {question}
						options = {options}
						isFirst = {isFirst} 
						insertClick = {insertClick}
						deleteClick = {deleteClick}
						notifySaving = {notifySaving}
						answersEnabled = {answersEnabled}
					/>
				}
				{ (type === 'text') && 
					<TextQuestion 
						id = {id}
						question = {question}
						isFirst = {isFirst} 
						insertClick = {insertClick}
						deleteClick = {deleteClick}
						notifySaving = {notifySaving}
						answersEnabled = {answersEnabled}
					/>
				}
				{ (type === 'file') && 
					<FileQuestion 
						id = {id}
						question = {question}
						isFirst = {isFirst} 
						insertClick = {insertClick}
						deleteClick = {deleteClick}
						notifySaving = {notifySaving}
						answersEnabled = {answersEnabled}
					/>
				}
				{ (type === 'rating') && 
					<RatingQuestion 
						id = {id}
						question = {question}
						isFirst = {isFirst} 
						insertClick = {insertClick}
						deleteClick = {deleteClick} 
						notifySaving = {notifySaving}
						answersEnabled = {answersEnabled}
					/>
				}
				{ (type === 'scale') && 
					<ScaleQuestion 
						id = {id}
						question = {question}
						isFirst = {isFirst} 
						insertClick = {insertClick}
						deleteClick = {deleteClick}
						notifySaving = {notifySaving}
						answersEnabled = {answersEnabled}
					/>
				}
			</div>
		);
 	}
}


