import React from 'react'
import generateId from '../../../lib/generateUniqueID'
import { connect } from 'react-redux'
import { store } from '../../../store'
import { addQuestion, insertQuestion, deleteQuestion, addAnswer } from '../../../actions/questionActions'

import NewQuestion from '../QuestionTypes/NewQuestion'
import Question from '../Question'

const mapStateToProps = (store) => {
	return {
		questions: store.currentSurvey.questionList,
		answers: store.currentSurvey.answersList,
		currentUser: store.user.currentUser.id
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addQuestion: (question) => store.dispatch(addQuestion(question)),
		insertQuestion: (id, question) => store.dispatch(insertQuestion(id, question)),
		addAnswer: (userId, questionId, optionId) =>
			store.dispatch(addAnswer(userId, questionId, optionId))
	};
};
@connect(mapStateToProps, mapDispatchToProps)
export default class SurveyPageEditor extends React.Component {
	constructor() {
		super();

		this.state = {
			isChoosingMode: false,
			currentAnswer: {}
		}

		this.checkIfAlreadyPassedSurvey = this.checkIfAlreadyPassedSurvey.bind(this);
		this.addQuestionAnswer = this.addQuestionAnswer.bind(this);

		this.choiceClick = this.choiceClick.bind(this);
		this.addQuestion = this.addQuestion.bind(this);
		this.insertQuestion = this.insertQuestion.bind(this);
		this.deleteQuestion = this.deleteQuestion.bind(this);
		this.notifySaving = this.notifySaving.bind(this);
	}

	checkIfAlreadyPassedSurvey() {
		for (let i=0; i < this.props.answers.length; i++) {
			if (this.props.answers[i].userId === this.props.currentUser)
				return true;
		};
		return false;
	}

	addQuestionAnswer(questionId, optionId) {
		let newQuestionAnswer = {
			userId: this.props.currentUser
		};
		newQuestionAnswer[questionId] = optionId;			

		this.setState({
			currentAnswer: Object.assign(
				{},
				this.state.currentAnswer,
				newQuestionAnswer
			)
		});
	}

	choiceClick() {
		this.setState({ isChoosingMode: true })
	}

	addQuestion(e) {
		const question = {
			id: generateId(),
			type: e.currentTarget.dataset.type
		};
		return this.props.addQuestion(question);
	}

	insertQuestion(e) {
		const id = e.currentTarget.parentNode.dataset.id;
		const question = {
			id: generateId(),
			type: e.currentTarget.dataset.type
		};
		return this.props.insertQuestion(id, question);
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
			};
		};
	}

	notifySaving(id) {
		this.setState({ questionChanged: id })
	}

	shouldComponentUpdate() {
		if (this.props.answersEnabled === true)
			return false;
	}
			
  	render() {
		const { questions, answers, currentUser, answersEnabled } = this.props;
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
				
				{(!this.checkIfAlreadyPassedSurvey()) ? questions.map(question =>
					<Question
						key = {question.id}
						id = {question.id}
						type = {question.type}
						answersEnabled = {answersEnabled}
						question = {question.question}
						userId = {this.props.currentUser}
						addQuestionAnswer = {this.addQuestionAnswer}
						
						isFirst = {!(questions.findIndex((elem) => (elem.id === question.id))) && true || false}
						insertClick = {this.insertQuestion}
						deleteClick = {this.deleteQuestion}
						notifySaving = {this.notifySaving}
						{...question}
					/>
				)
				: <h1>Вы уже проходили этот опрос</h1>}

				{(answersEnabled === true) && !this.checkIfAlreadyPassedSurvey() &&
					<button className="survey-body__submit-survey">Отправить результаты</button>
				}
			</section>
		);
 	}
}


