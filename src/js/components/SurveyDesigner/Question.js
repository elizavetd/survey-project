import React from 'react'

import OneAnswerQuestion from './QuestionTypes/OneAnswerQuestion'
import MultipleAnswersQuestion from './QuestionTypes/MultipleAnswersQuestion'
import TextQuestion from './QuestionTypes/TextQuestion'
import FileQuestion from './QuestionTypes/FileQuestion'
import RatingQuestion from './QuestionTypes/RatingQuestion'
import ScaleQuestion from './QuestionTypes/ScaleQuestion'

export default class Question extends React.Component {			
  	render() {
        const { type, question, options, isFirst, insertClick, deleteClick } = this.props;

		return (
			<div>
				{ (type === 'oneAnswer') && 
                    <OneAnswerQuestion 
                        question = {question}
                        options = {options}
                        isFirst = {isFirst} 
                        insertClick = {insertClick}
                        deleteClick = {deleteClick}
                    /> 
                }
				{ (type === 'severalAnswers') && 
                    <MultipleAnswersQuestion 
                        question = {question}
                        options = {options}
                        isFirst = {isFirst} 
                        insertClick = {insertClick}
                        deleteClick = {deleteClick}
                    />
                }
				{ (type === 'text') && 
                    <TextQuestion 
                        question = {question}
                        isFirst = {isFirst} 
                        insertClick = {insertClick}
                        deleteClick = {deleteClick}
                    />
                }
				{ (type === 'file') && 
                    <FileQuestion 
                        question = {question}
                        isFirst = {isFirst} 
                        insertClick = {insertClick}
                        deleteClick = {deleteClick}
                    />
                }
				{ (type === 'rating') && 
                    <RatingQuestion 
                        question = {question}
                        isFirst = {isFirst} 
                        insertClick = {insertClick}
                        deleteClick = {deleteClick} 
                    />
                }
				{ (type === 'scale') && 
                    <ScaleQuestion 
                        question = {question}
                        isFirst = {isFirst} 
                        insertClick = {insertClick}
                        deleteClick = {deleteClick}
                    />
                }
			</div>
		);
 	}
}


