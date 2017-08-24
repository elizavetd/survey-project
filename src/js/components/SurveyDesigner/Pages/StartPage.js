import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../../store'
import { editTitle, editDescription, setType } from '../../../actions/questionActions'

const mapStateToProps = (store) => {
	return {
		title: store.currentSurvey.title,
		description: store.currentSurvey.description,
		type: store.currentSurvey.type,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		editTitle: title => dispatch(editTitle(title)),
		editDescription: description => dispatch(editDescription(description)),
		setType: type => dispatch(setType(type)),
	}
};

@connect(mapStateToProps, mapDispatchToProps)
export default class StartPage extends React.Component {
	constructor() {
		super();

		this.state = {
			currentTitle: false,
			currentDescription: false,
			currentType: false,
		};

		this.changeTitle = this.changeTitle.bind(this);
		this.changeDescription = this.changeDescription.bind(this);

		this.saveTitle = this.saveTitle.bind(this);
		this.saveDescription = this.saveDescription.bind(this);
		this.saveType = this.saveType.bind(this);

		this.submitChanges = this.submitChanges.bind(this);
	}

	changeTitle(e) {
		this.setState({
			currentTitle: e.target.value
		});
	}

	changeDescription(e) {
		this.setState({
			currentDescription: e.target.value
		});
	}

	saveTitle() {
		if (this.state.currentTitle !== this.props.title)
			this.props.editTitle(this.state.currentTitle);
	}

	saveDescription() {
		if (this.state.currentDescription !== this.props.description)
			this.props.editDescription(this.state.currentDescription);
	}

	saveType(e) {
		this.setState({
			currentType: e.target.value
		});
		if (e.target.value !== this.props.type)
			this.props.setType(e.target.value);
	}

	submitChanges(e) {
		e.preventDefault();

		this.saveTitle();
		this.saveDescription();
	}

	render() {
		const { title, description, type } = this.props;

		if (!this.state.currentTitle)
			this.state.currentTitle = title;

		if (!this.state.currentDescription)
			this.state.currentDescription = description;

		if (!this.state.currentType)
			this.state.currentType = type;

		console.log(this.state);

		return (
			<section className="survey-body">
				<form className="survey-start-editor" onSubmit={this.submitChanges}>
					<button className="survey-body__add-logo"><i className="fa fa-picture-o" aria-hidden="true"></i><p>Добавить изображение</p></button>

					<input 
						onChange={this.changeTitle}
						onBlur={this.saveTitle}
						className="survey-body__survey-name"
						type="text"
						value={title} 
					/>
					<textarea
						onChange={this.changeDescription}
						onBlur={this.saveDescription}
						className="survey-body__survey-description"
						defaultValue={ description }
					/>

					<p><select onChange={this.saveType} className="survey-body__survey-category" readOnly name="survey-category" defaultValue={type}>
						<option disabled>-- выберите тип опроса --</option>
						<option defaultValue="Услуги">Услуги</option>
						<option defaultValue="Управление кадрами">Управление кадрами</option>
						<option defaultValue="Мероприятия">Мероприятия</option>
						<option defaultValue="Маркентиконговое исследование">Маркентиконговое исследование</option>
						<option defaultValue="Здравоохранение">Здравоохранение</option>
						<option defaultValue="Образование">Образование</option>
					</select></p>
				</form>
			</section>
		);
	}
}
