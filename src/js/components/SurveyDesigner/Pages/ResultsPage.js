import React from 'react'
import { NavLink } from 'react-router-dom'
import Select from 'react-select'
import { connect } from 'react-redux'
import { store } from '../../../store'

import PaginationBar from '../../PaginationBar'

import Result from '../QuestionResults/Result'

const mapStateToProps = (store) => {
	return {
		survey: store.currentSurvey,
		user: store.user.currentUser
	};
};
@connect(mapStateToProps)
export default class ResultsPage extends React.Component {
	constructor() {
		super();

		this.state = {
			questionFilter: 'all'
		}

		this.getUserById = this.getUserById.bind(this);
		this.translateState = this.translateState.bind(this);
		this.getQuestionResutById = this.getQuestionResutById.bind(this);

		this.filter = this.filter.bind(this);
	}

	filter(val) {
		switch(val.value) {
			case 'Вопросы с одним ответом': 
				this.setState({questionFilter: 'oneAnswer'});
				break;

			case 'Вопросы с несколькими ответами':
				this.setState({questionFilter: 'severalAnswers'});
				break;

			case 'Вопросы с текстовым ответом':
				this.setState({questionFilter: 'text'});
				break;

			case 'Вопросы-рейтинг':
				this.setState({questionFilter: 'rating'});
				break;

			case 'Вопросы-шкала':
				this.setState({questionFilter: 'scale'});
				break;

			case 'Все вопросы':
				this.setState({questionFilter: 'all'});
				break;
		}
	}

	getUserById(id) {
		return JSON.parse(localStorage.getItem('userList')).users.filter(
			elem => elem.id === id
		)[0];
	}

	translateState(filter) {
		switch(filter) {
			case 'all':
				return "Все вопросы";
			case 'oneAnswer':
				return "Вопросы с одним ответом";
			case 'severalAnswers':
				return "Вопросы с несколькими ответами";
			case 'text':
				return "Вопросы с текстовым ответом";
			case 'rating':
				return "Вопросы-рейтинг";
			case 'scale':
				return "Вопросы-шкала";
		};
	}

	getQuestionResutById(id, type) {
		switch (type) {
			case 'oneAnswer': {
				let answersArray = this.props.survey.answersList.filter(
					answer => answer.hasOwnProperty(id)
				).map(
					answer => answer[id]
				);

				if(answersArray.length === 0)
					return [];
				
				let answersByOption = {};
				for (let option of answersArray) {
					answersByOption[option] = ~~answersByOption[option] + 1;
				}

				return this.props.survey.questionList.filter(
					question => question.id === id
				)[0].options.map(
					option => {
						return {
							"option": option.value,
							"value": answersByOption[option.id] || 0
						}
					}
				);
			}

			case 'severalAnswers': {
				let answers = this.props.survey.answersList.filter(
					answer => answer.hasOwnProperty(id)
				)

				if(answers.length === 0)
					return [];
				
				let answersArray = answers
					.map( answer => answer[id] )
					.reduce(function(prev, curr) { return prev.concat(curr); });
				
				let answersByOption = {};
				for (let option of answersArray) {
					answersByOption[option] = ~~answersByOption[option] + 1;
				}

				return this.props.survey.questionList.filter(
					question => question.id === id
				)[0].options.map(
					option => {
						return {
							"option": option.value,
							"value": answersByOption[option.id] || 0
						}
					}
				);
			}

			case 'text':
			case 'file': 
			case 'scale': {
				return this.props.survey.answersList.filter(
					answer => answer.hasOwnProperty(id)
				).map(
					answer => {
						return {
							"user": this.getUserById(answer.userId).username,
							"answer": answer[id]
						}
					}
				);
			}

			case 'rating': {
				let answersArray = this.props.survey.answersList.filter(
					answer => answer.hasOwnProperty(id)
				).map(
					answer => answer[id]
				);

				if(answersArray.length === 0)
					return [];
				
				let answersByOption = {};
				for (let option of answersArray) {
					answersByOption[option] = ~~answersByOption[option] + 1;
				}

				return [1, 2, 3, 4, 5].map(
					option => {
						return {
							"option": option,
							"value": answersByOption[option] || 0
						}
					}
				);
			}
		}
	}

	render() {
		const {user, survey} = this.props;
		const questionTypes = [
			{value: "Все вопросы", label: "Все вопросы"},
			{value: "Вопросы с одним ответом", label: "Вопросы с одним ответом"},
			{value: "Вопросы с несколькими ответами", label: "Вопросы с несколькими ответами"},
			{value: "Вопросы с текстовым ответом", label: "Вопросы с текстовым ответом"},
			{value: "Вопросы-рейтинг", label: "Вопросы-рейтинг"},
			{value: "Вопросы-шкала", label: "Вопросы-шкала"}
		];

		let list;

		if (survey.questionList && list !== survey.questionList)
			list = survey.questionList;

		if(this.state.questionFilter !== 'all') {
			list = list.filter(
				question => question.type.includes(this.state.questionFilter)
			);
		}

	return (
		<section className="survey-results">
			<h2>Просмотр всех ответов</h2>
			<div className="survey-results__info">
				<p>Вопросов: {survey.questionList.length}</p>
				<p>Всего ответов: {survey.answersList.length}</p>
			</div>
			<div className="survey-results__nav-buttons">
				<NavLink exact to={`/survey_${survey.id}/results`} activeClassName="survey-results__nav-buttons_current"><button>Сводные данные по вопросам</button></NavLink>
				<NavLink to={`/survey_${survey.id}/results/${survey.answersList.length > 0 && this.getUserById(survey.answersList[0].userId).username}`} activeClassName="survey-results__nav-buttons_current"><button>Ответы пользователя</button></NavLink>
			</div>

			<Select
				className = 'survey-results__view-option'
				name="select-question-type-to-view"
				value={this.translateState(this.state.questionFilter)}
				clearable={false}
				options={questionTypes}
				onChange={this.filter}
			/>

			{/* <PaginationBar 
				hasSideInfo = {true}
				itemCountCaption="Вопросов:"
				itemCount = {12}
				pageNumber={1}
				pageCount = {3}
			/> */}
			
			{survey.questionList 
				? list.map(question =>
					<Result
						key = {question.id}
						type = {question.type}
						question = {question.question}
						answered = {this.props.survey.answersList.filter(
							answer => answer.hasOwnProperty(question.id)
						).length}
						all = {this.props.survey.answersList.length}
						results = {this.getQuestionResutById(question.id, question.type)}
					/>
				)
				: <h1>Никто ещё не прошёл этот опрос :(</h1>
			}

			{/* <PaginationBar hasSideInfo = {false} hasPadding = {false} /> */}
		</section>
	);
  }
}
