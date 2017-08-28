import React from 'react'
import generateId from '../../../lib/generateUniqueID'
import { connect } from 'react-redux'
import { store } from '../../../store'
import { addQuestion, insertQuestion, deleteQuestion, editQuestion } from '../../../actions/questionActions'

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
		this.notifySaving = this.notifySaving.bind(this);
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

	deleteQuestion(e) {
		const id = e.currentTarget.parentNode.dataset.id;

		let animation = setInterval(frame, 5);

		let elem = e.currentTarget.parentNode.parentNode; 
		let h = elem.offsetHeight - 100;
		let p = 50;

		elem.style.paddingTop = p + 'px';
		elem.style.paddingBottom = p + 'px';
		elem.style.opacity = 1;

		function frame() {
			if (h <= 0) {
				store.dispatch(deleteQuestion(id));
				clearInterval(animation);
			} else {
				elem.style.height = h + 'px';
				elem.style.opacity -= 0.2;
				elem.style.paddingTop = p + 'px';
				elem.style.paddingBottom = p + 'px';
				h -= 5;  
				p -= 2;
			}
		}
	}

	notifySaving(id) {
		this.setState({ questionChanged: id })
	}
			
  	render() {
		const { questions, answersEnabled } = this.props;
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
						answersEnabled = {answersEnabled}
						question = {question.question}
						
						isFirst = {!(questions.findIndex((elem) => (elem.id === question.id))) && true || false}
						insertClick = {this.insertQuestion}
						deleteClick = {this.deleteQuestion}
						notifySaving = {this.notifySaving}
						{...question}
					/>
				)}
			</section>
		);
 	}
}


