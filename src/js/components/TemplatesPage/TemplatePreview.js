import React from "react"
import { connect } from 'react-redux'
import { store } from '../../store'
import { requestTemplateRemoval } from '../../actions/templateActions'

const mapDispatchToProps = (dispatch) => {
	return {
		requestTemplateRemoval: (id) => store.dispatch(requestTemplateRemoval(id))
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

		this.handleRemoval = this.handleRemoval.bind(this)
	}

	handleRemoval() {
		this.props.requestTemplateRemoval(this.props.id);
	}

	render() {
		const { id,
			iconType,
			title,
			description,
			questionsCount,
			pageCount,
			creator,
			currentUser } = this.props;

		return (
			<article className="template-preview">
				<div id="flipping-icon" className="template-preview__icon"><i className={iconType} aria-hidden="true"></i></div>
				<div className="template-preview__edit-buttons">
					
					<button 
						className="template-preview__button-edit"
						disabled = {!(currentUser.role === 'administrator' || 
										currentUser.username === creator)}
					>
						<i className="fa fa-pencil" aria-hidden="true"></i>
					</button>

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
				<button className="template-preview__button-create">Создать опрос</button>
			</article>
		);
	};
};
