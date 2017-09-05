import React from 'react'
import { NavLink } from 'react-router-dom'
import Select from 'react-select'
import { connect } from 'react-redux'
import { store, history } from '../../../store'

import PaginationBar from '../../PaginationBar'

import UserResult from '../UserResults/UserResult'

const mapStateToProps = (store) => {
	return {
		survey: store.currentSurvey,
		currentUser: store.user.currentUser
	};
};
@connect(mapStateToProps)
export default class ResultsPage extends React.Component {
	constructor() {
		super();

		this.getUserList = this.getUserList.bind(this);
		this.changeViewedUser = this.changeViewedUser.bind(this);
	}

	getUserList() {
		let userList = this.props.survey.answersList.map(
			answer => answer.userId
		);

		return JSON.parse(localStorage.getItem('userList')).users
			.filter(user => {
				for (let i = 0; i < userList.length; i++) {
					if (user.id === userList[i]) {
						return true;
					}
				}
				return false
			})
			.sort((a, b) => {
				if (a.username.toLowerCase() > b.username.toLowerCase())
					return 1;
				else if (a.username.toLowerCase() < b.username.toLowerCase()) 
					return -1;
				else return 0;
			})
			.map(user => {
				return {
					'value': user.username,
					'label': user.username
				};
			});
	}

	changeViewedUser(val) {
		history.push(`/survey_${this.props.survey.id}/results/${val.value}`);
	}

	render() {
		const {currentUser, survey, match} = this.props;
		let user;

		if(match.params.user === currentUser.username) {
			user = currentUser;
		} else {
			user = JSON.parse(localStorage.getItem('userList')).users.filter(
				elem => elem.username === match.params.user
			)[0];
		}

		const userAnswer = survey.answersList.filter(
			elem => elem.userId === user.id
		)[0];

		return (
			<section className="survey-results">
				<h2>Просмотр ответов {user.username}</h2>
				<div className="survey-results__info">
					<p>Вопросов: {survey.questionList.length}</p>
					<p>Всего ответов: {survey.answersList.length}</p>
				</div>
				<div className="survey-results__nav-buttons">
					<NavLink 
						exact to={`/survey_${survey.id}/results`}
						activeClassName="survey-results__nav-buttons_current"
					>
						<button disabled = {survey.creator !== currentUser.id}>
							Сводные данные по вопросам
						</button>
					</NavLink>

					<NavLink 
						to={`/survey_${survey.id}/results/${user.username}`}
						activeClassName="survey-results__nav-buttons_current"
					>
						<button>
							Ответы пользователя
						</button>
					</NavLink>
				</div>

				<Select
					disabled = {survey.creator !== currentUser.id}
					className = 'survey-results__view-option'
					name="select-user-to-view"
					value={user.username}
					clearable={false}
					options={this.getUserList()}
					onChange={this.changeViewedUser}
				/>

				{/* <PaginationBar 
					hasSideInfo = {true}
					itemCountCaption="Вопросов:"
					itemCount = {12}
					pageNumber={1}
					pageCount = {3}
				/> */}

				{userAnswer 
					? survey.questionList.map(question =>
						<UserResult 
							key={question.id}
							question = {question.question}
							type = {question.type}
							result = {
								question.type === 'oneAnswer' && 
								(question.options.filter(option => option.id === userAnswer[question.id]).length > 0 
									? question.options.filter(
										option => option.id === userAnswer[question.id]
									)[0].value
									: null
								)
								||
								question.type === 'severalAnswers' && 
								question.options.filter(option => {
									for (let i = 0; i < userAnswer[question.id].length; i++) {
										if(option.id === userAnswer[question.id][i])
											return true;
									}
									return false;
								}).map(option => option.value)
								||
								userAnswer[question.id]
							}
						/>
					)
					: <h1>Пользователь не проходил этот опрос</h1>
				}
				
				{/* <PaginationBar hasSideInfo = {false} hasPadding = {false} /> */}
			</section>
		);
	};
};
