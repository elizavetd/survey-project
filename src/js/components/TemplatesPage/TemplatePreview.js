import React from "react"
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { store, history } from '../../store'
import { requestTemplateRemoval } from '../../actions/templateActions'
import { createSurveyFromTemplate } from '../../actions/questionActions'
import { generateSurveyID } from '../../lib/generateUniqueID'

const mapDispatchToProps = (dispatch) => {
	return {
		requestTemplateRemoval: (id) => 
			store.dispatch(requestTemplateRemoval(id)),

		createSurveyFromTemplate: (template) => 
			store.dispatch(createSurveyFromTemplate(template))
	};
};

const mapStateToProps = (store) => {
	return {
		currentUser: store.user.currentUser
	};
};

@connect(mapStateToProps, mapDispatchToProps)
export default class TemplatePreview extends React.Component {
	constructor() {
		super();
		this.state = {}

		this.handleRemoval = this.handleRemoval.bind(this);
		this.createNewSurvey = this.createNewSurvey.bind(this);
		this.loadTemplate = this.loadTemplate.bind(this);
	}

	handleRemoval() {
		this.props.requestTemplateRemoval(this.props.id);
	}

	createNewSurvey() {
		let newSurvey = {
			id: generateSurveyID(),
			creator: this.props.currentUser.id,
			title: this.props.title,
			description: this.props.description,
			imageSrc: this.props.imageSrc,
			type: this.props.type,
			iconType: this.props.iconType,
			finishMessage: this.props.finishMessage,
			finishDetail: this.props.finishDetail,
			answersCount: 0,
			questionList: this.props.questionList
		};

		this.props.createSurveyFromTemplate(newSurvey);
		history.push('/new-survey');
	}

	loadTemplate() {
		let newSurvey = {
			id: this.props.id,
			creator: this.props.currentUser.id,
			title: this.props.title,
			description: this.props.description,
			imageSrc: this.props.imageSrc,
			type: this.props.type,
			iconType: this.props.iconType,
			finishMessage: this.props.finishMessage,
			finishDetail: this.props.finishDetail,
			answersCount: 0,
			questionList: this.props.questionList
		};

		this.props.createSurveyFromTemplate(newSurvey);
	}

	render() {
		const { id,
				iconType,
				type,
				title,
				description,
				questionsCount,
				pageCount,
				imageSrc,
				creator,
				finishMessage,
				finishDetail,
				questionList,
				currentUser } = this.props;

		return (
			<article className="template-preview">
				<div id="flipping-icon" className="template-preview__icon"><i className={iconType} aria-hidden="true"></i></div>
				<div className="template-preview__edit-buttons">
					
					<NavLink to={`template_${id}/edit`}><button 
						onClick={this.loadTemplate}
						className="template-preview__button-edit"
						disabled = {!(currentUser.role === 'administrator' || 
										currentUser.username === creator)}
					>
						<i className="fa fa-pencil" aria-hidden="true"></i>
					</button></NavLink>

					<button 
						onClick = {this.handleRemoval}
						className="template-preview__button-delete"
						disabled = {!(currentUser.role === 'administrator' || 
										currentUser.username === creator)}
					>
						<i className="fa fa-trash" aria-hidden="true"></i>
					</button>
				</div>
				<h3 className="template-preview__header">{title}</h3>
				<p className="template-preview__creator">Добавил: <strong>{creator}</strong></p>
				<p className="template-preview__description">{description}</p>

				<div className="template-preview__info">
					<p>Вопросов: {questionsCount}</p>
					<p>Страниц: {pageCount}</p>
				</div>

				<button 
					onClick = {this.createNewSurvey}
					className="template-preview__button-create"
				>
					Создать опрос
				</button>
			</article>
		);
	};
};
