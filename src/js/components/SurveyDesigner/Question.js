import React from 'react'

import OneAnswerQuestion from './QuestionTypes/OneAnswerQuestion'
import MultipleAnswersQuestion from './QuestionTypes/MultipleAnswersQuestion'
import TextQuestion from './QuestionTypes/TextQuestion'
import FileQuestion from './QuestionTypes/FileQuestion'
import RatingQuestion from './QuestionTypes/RatingQuestion'
import ScaleQuestion from './QuestionTypes/ScaleQuestion'

export default class Question extends React.Component {			
  	render() {
        const { type, id, question, options, isFirst, insertClick, deleteClick } = this.props;

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
                    />
                }
				{ (type === 'text') && 
                    <TextQuestion 
                        id = {id}
                        question = {question}
                        isFirst = {isFirst} 
                        insertClick = {insertClick}
                        deleteClick = {deleteClick}
                    />
                }
				{ (type === 'file') && 
                    <FileQuestion 
                        id = {id}
                        question = {question}
                        isFirst = {isFirst} 
                        insertClick = {insertClick}
                        deleteClick = {deleteClick}
                    />
                }
				{ (type === 'rating') && 
                    <RatingQuestion 
                        id = {id}
                        question = {question}
                        isFirst = {isFirst} 
                        insertClick = {insertClick}
                        deleteClick = {deleteClick} 
                    />
                }
				{ (type === 'scale') && 
                    <ScaleQuestion 
                        id = {id}
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


