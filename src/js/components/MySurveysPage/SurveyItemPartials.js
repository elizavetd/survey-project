import React from "react"
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { store } from '../../store'
import { requestSurveyRemoval } from '../../actions/userSurveysActions'
import { loadExistingSurvey } from '../../actions/questionActions'

const mapDispatchToProps = (dispatch) => {
	return {
		requestSurveyRemoval: (id, userId) => 
			store.dispatch(requestSurveyRemoval(id, userId)),
		loadExistingSurvey: (survey) => store.dispatch(loadExistingSurvey(survey))
	};
};

const mapStateToProps = (store) => {
	return {
		currentUserId: store.user.currentUser.id,
		currentUserUsername: store.user.currentUser.username,
		surveyList: store.surveys.surveyList
	};
};

@connect(mapStateToProps, mapDispatchToProps)
export class Options extends React.Component {
	constructor() {
		super();

		this.loadSurvey = this.loadSurvey.bind(this);
		this.handleRemoval = this.handleRemoval.bind(this);
	}

	loadSurvey() {
		const thisSurvey = this.props.surveyList.filter(element => 
			element.id === this.props.id
		)[0];

		this.props.loadExistingSurvey(thisSurvey);
	}

	handleRemoval() {
		this.props.requestSurveyRemoval(this.props.id, this.props.currentUserId);
	}

	render() {
		const { id, creator, currentUserId, currentUserUsername, surveyList } = this.props;

		return (
			<div className="survey-item__options">
				<NavLink to={`/survey_${id}/collect-answers`}><button 
					onClick={this.loadSurvey}
					className="survey-item__button survey-item__button_collect" 
					title="Сбор ответов"
				>
					<i className="fa fa-users" aria-hidden="true"></i>
				</button></NavLink>
				
				<NavLink exact to={creator === currentUserId 
					? `/survey_${id}/results`
					: `/survey_${id}/results/${currentUserUsername}`
				}>
					<button 
						onClick={this.loadSurvey}
						className="survey-item__button survey-item__button_results" 
						title="Результаты опроса"
					>
						<i className="fa fa-bar-chart" aria-hidden="true"></i>
					</button>
				</NavLink>
				
				{/* <button 
					className="survey-item__button survey-item__button_edit" 
					title="Редактировать опрос"
				>
					<i className="fa fa-pencil" aria-hidden="true"></i>
				</button> */}
				
				<button 
					onClick = {this.handleRemoval}
					disabled = {creator !== currentUserId}
					className="survey-item__button survey-item__button_delete" 
					title="Удалить опрос"
				>
					<i className="fa fa-trash" aria-hidden="true"></i>
				</button>
			</div>
		);
	};
};

export const Caption = ({ imageSrc, iconType, title, description }) => (
	<div className="survey-item__caption">
		<div className="survey-item__image-container">
			<img className="survey-item__image" src={imageSrc} alt="" />
			<div className="survey-item__icon"><i className={iconType} aria-hidden="true"></i></div>
		</div>
		<div className="survey-item__title-container">
			<h3 className="survey-item__name">{title}</h3>
			<p className="survey-item__description">{description}</p>
		</div>
	</div>
);

export class Details extends React.Component {
	constructor() {
		super();
		this.getUsernameById = this.getUsernameById.bind(this);
	}

	getUsernameById(id) {
		return JSON.parse(localStorage.getItem('userList')).users.filter(
			elem => elem.id === id
		)[0].username;
	}

	render() {
		const { answersCount, lastChangeDate, creator } = this.props;

		return (
			<div className="survey-item__info">
				<div>
					<h4 className="survey-item__info-name">Создатель:</h4>
					<p className="survey-item__info-value">{this.getUsernameById(creator)}</p>
				</div>
				<div>
					<h4 className="survey-item__info-name">Ответы:</h4>
					<p className="survey-item__info-value">{answersCount}</p>
				</div>
				<div>
					<h4 className="survey-item__info-name">Изменён:</h4>
					<p className="survey-item__info-value">{lastChangeDate}</p>
				</div>
			</div>
		);
	};
};
