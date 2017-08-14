import React from 'react'

import NewQuestion from '../QuestionTypes/NewQuestion'
import OneAnswerQuestion from '../QuestionTypes/OneAnswerQuestion'
import MultipleAnswersQuestion from '../QuestionTypes/MultipleAnswersQuestion'
import TextQuestion from '../QuestionTypes/TextQuestion'
import FileQuestion from '../QuestionTypes/FileQuestion'
import RatingQuestion from '../QuestionTypes/RatingQuestion'
import ScaleQuestion from '../QuestionTypes/ScaleQuestion'

export default class StartPage extends React.Component {
		constructor() {
    		super();
				this.state = {
						isChoosingMode: false
				}

				this.choiceClick = this.choiceClick.bind(this);
				this.addQuestion = this.addQuestion.bind(this);
		}

		choiceClick() {
				this.setState({ isChoosingMode: true })
		}

		addQuestion(e) {
				switch(e.currentTarget.dataset.type) {
            case 'one answer':
                
            case 'several answers':
                
            case 'text':
								
						case 'file':

						case 'rating':

						case 'scale':
				}
		}
			
  	render() {
    		return (
    			<section className="survey-body">
							<NewQuestion 
									onClick = {this.choiceClick}
									questionClick = {this.addQuestion}
									isChoosingMode = {this.state.isChoosingMode} 
							/>
					
						{/* <NewQuestion isChoosingMode = {true} /> */}
							
						{/* <OneAnswerQuestion isFirst = {true} />
						<MultipleAnswersQuestion isFirst = {false} />
						<TextQuestion isFirst = {false} />
						<FileQuestion isFirst = {false} />
						<RatingQuestion isFirst = {false} />
						<ScaleQuestion isFirst = {false} />    */}
					</section>
				);
 		}
}


