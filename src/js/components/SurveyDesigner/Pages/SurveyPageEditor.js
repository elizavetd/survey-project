import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../../store'
import { addQuestion } from '../../../actions/questionActions'

import NewQuestion from '../QuestionTypes/NewQuestion'
import Question from '../Question'

let nextQuestionId = 0;

@connect((store) => {
    return {
        questions: store.currentSurvey.questionList
    };
})
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
		const question = {
			id: nextQuestionId++,
			type: e.currentTarget.dataset.type
		};
		return store.dispatch(addQuestion(question));
	}
			
  	render() {
		const { questions } = this.props;

		return (
			<section className="survey-body">
				<NewQuestion 
					onClick = {this.choiceClick}
					questionClick = {this.addQuestion}
					isChoosingMode = {this.state.isChoosingMode} 
				/>
				
				{questions.map(question =>
					<Question
						key = {question.id}
						type = {question.type}
						question = {question.question}
						options = {question.options}
					/>
				)}
			</section>
		);
 	}
}


