import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../../store'
import { editMessage, editDetail } from '../../../actions/questionActions'

const mapStateToProps = (store) => {
	return {
		message: store.currentSurvey.finishMessage,
		detail: store.currentSurvey.finishDetail
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		editMessage: message => dispatch(editMessage(message)),
		editDetail: detail => dispatch(editDetail(detail))
	}
};

@connect(mapStateToProps, mapDispatchToProps)
export default class FinishPage extends React.Component {
	constructor() {
		super();

		this.state = {
			currentMessage: false,
			currentDetail: false
		};

		this.changeMessage = this.changeMessage.bind(this);
		this.changeDetail = this.changeDetail.bind(this);

		this.saveMessage = this.saveMessage.bind(this);
		this.saveDetail = this.saveDetail.bind(this);
	}

	changeMessage(e) {
		this.setState({
			currentMessage: e.target.value
		});
	}

	changeDetail(e) {
		this.setState({
			currentDetail: e.target.value
		});
	}

	saveMessage() {
		if (this.state.currentMessage !== this.props.title)
			this.props.editMessage(this.state.currentMessage);
	}

	saveDetail() {
		if (this.state.currentDetail !== this.props.description)
			this.props.editDetail(this.state.currentDetail);
	}

	render() {
		const { message, detail } = this.props;

		if (!this.state.currentMessage)
			this.state.currentMessage = message;

		if (!this.state.currentDetail)
			this.state.currentDetail = detail;

		console.log(this.state);
		return (
			<section className="survey-body">
				<form className="survey-finish-editor">
					<textarea 
						onChange={this.changeMessage}
						onBlur={this.saveMessage}
						className="survey-body__survey-name"
						defaultValue={message}
					/>
					<textarea 
						onChange={this.changeDetail}
						onBlur={this.saveDetail}
						className="survey-body__survey-description"
						defaultValue={detail}
					/>
				</form>
			</section>
		);
	};
};
