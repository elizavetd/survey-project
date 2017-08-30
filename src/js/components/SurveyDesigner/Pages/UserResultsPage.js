import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { store } from '../../../store'

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
			<h2>Просмотр ответов {this.props.match.params[0]}</h2>
			<div className="survey-results__info">
				<p>Вопросов: {survey.questionList.length}</p>
				<p>Всего ответов: {survey.answersList.length}</p>
			</div>
			<div className="survey-results__nav-buttons">
				<NavLink exact to={`/survey_${survey.id}/results`} activeClassName="survey-results__nav-buttons_current"><button>Сводные данные по вопросам</button></NavLink>
				<NavLink to={`/survey_${survey.id}/results/${user.username}`} activeClassName="survey-results__nav-buttons_current"><button>Ответы пользователя</button></NavLink>
			</div>
			<p className="survey-results__view-option"><select defaultValue="Все вопросы">
				<option>Все вопросы</option>
				<option value="Какие-то вопросы">Какие-то вопросы</option>
				<option value="Другие вопросы">Другие вопросы</option>
			</select></p>
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
							question.options.filter(
								option => option.id === userAnswer[question.id]
							)[0].value
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
  }
}
