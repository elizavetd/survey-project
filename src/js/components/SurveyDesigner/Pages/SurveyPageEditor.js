import React from 'react'
import generateId from '../../../lib/generateUniqueID'
import { connect } from 'react-redux'
import { store } from '../../../store'
import { addQuestion, insertQuestion, deleteQuestion } from '../../../actions/questionActions'

import NewQuestion from '../QuestionTypes/NewQuestion'
import Question from '../Question'

@connect((store) => {
    return {
        questions: store.currentSurvey.questionList
    };
})
export default class SurveyPageEditor extends React.Component {
	constructor() {
		super();

		this.state = {
			isChoosingMode: false
		}

		this.choiceClick = this.choiceClick.bind(this);
		this.addQuestion = this.addQuestion.bind(this);
		this.insertQuestion = this.insertQuestion.bind(this);
		this.deleteQuestion = this.deleteQuestion.bind(this);
	}

	choiceClick() {
		this.setState({ isChoosingMode: true })
	}

	addQuestion(e) {
		const question = {
			id: generateId(),
			type: e.currentTarget.dataset.type
		};
		return store.dispatch(addQuestion(question));
	}

	insertQuestion(e) {
		const id = e.currentTarget.parentNode.dataset.id;
		const question = {
			id: generateId(),
			type: e.currentTarget.dataset.type
		};
		return store.dispatch(insertQuestion(id, question))
	}

	deleteQuestion(id) {
		store.dispatch(deleteQuestion(id));
	}
			
  	render() {
		const { questions } = this.props;
		if (questions.length > 1) {
			this.state.isChoosingMode = true;
		}

		return (
			<section className="survey-body">
				{ (questions.length < 1) && <NewQuestion 
					onClick = {this.choiceClick}
					questionClick = {this.addQuestion}
					isChoosingMode = {this.state.isChoosingMode} 
				/>}
				
				{questions.map(question =>
					<Question
						key = {question.id}
						id = {question.id}
						type = {question.type}
						question = {question.question}
						options = {question.options}
						isFirst = {!(questions.findIndex((elem) => (elem.id === question.id))) && true || false}
						insertClick = {this.insertQuestion}
						deleteClick = {() => this.deleteQuestion(question.id)}
					/>
				)}
			</section>
		);
 	}
}


