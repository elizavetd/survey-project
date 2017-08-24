import React from "react"
import { connect } from 'react-redux'
import { store } from '../../store'
import { requestSurveyRemoval } from '../../actions/userSurveysActions'

const mapDispatchToProps = (dispatch) => {
	return {
		requestSurveyRemoval: (id, userId) => 
			store.dispatch(requestSurveyRemoval(id, userId))
	};
};

const mapStateToProps = (store) => {
	return {
		currentUserId: store.user.currentUser.id
	};
};

@connect(mapStateToProps, mapDispatchToProps)
export class Options extends React.Component {
	constructor() {
		super();

		this.handleRemoval = this.handleRemoval.bind(this);
	}

	handleRemoval() {
		this.props.requestSurveyRemoval(this.props.id, this.props.currentUserId);
	}

	render() {
		const { id, currentUserId } = this.props;

		return (
			<div className="survey-item__options">
				<button className="survey-item__button survey-item__button_collect" title="Сбор ответов"><i className="fa fa-users" aria-hidden="true"></i></button>
				<button className="survey-item__button survey-item__button_results" title="Результаты опроса"><i className="fa fa-bar-chart" aria-hidden="true"></i></button>
				<button className="survey-item__button survey-item__button_edit" title="Редактировать опрос"><i className="fa fa-pencil" aria-hidden="true"></i></button>
				<button 
					onClick = {this.handleRemoval}
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

export const Details = ({ answersCount, lastChangeDate }) => (
	<div className="survey-item__info">
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
