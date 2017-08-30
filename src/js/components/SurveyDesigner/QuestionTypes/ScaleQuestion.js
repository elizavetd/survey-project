import React from 'react'
import ReactModal from 'react-modal';

import EditButtons from '../EditButtons'
import QuestionModal from '../Modals/QuestionModal'

class ScaleQuestion extends React.Component {
	constructor() {
		super();

		this.state = {
			clicked: false,
			buttonClass: 'fa fa-plus-circle',
			choosingClass: 'survey-body__question_list',
			sliderValue: 50
		}

		this.choosingClick = this.choosingClick.bind(this);
		this.hideChoice = this.hideChoice.bind(this);

		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);

		this.handleAnswer = this.handleAnswer.bind(this);
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	choosingClick(e) {
		if (this.state.clicked) {
			this.setState({
				clicked: false,
				buttonClass: 'fa fa-plus-circle',
				choosingClass: 'survey-body__question_list'
			});
		} else {
			this.setState({
				clicked: true,
				buttonClass: 'fa fa-minus-circle',
				choosingClass: 'survey-body__question_list survey-body__question_list-visible'
			});
		}
	}

	hideChoice(e) {
		this.setState({
			clicked: false,
			buttonClass: 'fa fa-plus-circle',
			choosingClass: 'survey-body__question_list'
		});
	}

	handleOpenModal () {
		this.setState({ showModal: true });
	}
	  
	handleCloseModal () {
		this.setState({ showModal: false });
	}

	handleAnswer(e) {
		console.log(e.target.value);
		this.props.addQuestionAnswer(this.props.id, e.target.value);
	}

	handleMouseOver(e) {
		e.target.style.cursor = 'pointer'	
	}

	handleChange(e) {
		this.setState({
			sliderValue: e.target.value
		})
	}

	render() {
		const { isFirst, id, question, answersEnabled,
			insertClick, deleteClick, notifySaving} = this.props;
	
		return (
			<article className={(isFirst) 
				&& "survey-body__question survey-body__question_scale survey-body__question_first"
				|| "survey-body__question survey-body__question_scale"
			}>
				{(answersEnabled !== true) && 
					<button 
						onClick={this.choosingClick} 
						className="survey-body__add-button survey-body__add-button_above-question"
					>
						<i className={this.state.buttonClass} aria-hidden="true"></i>
					</button>
				}
				
				<div className={this.state.choosingClass} data-id={id}>
					<button onClick={insertClick} onMouseUp={this.hideChoice} data-type="oneAnswer" className="survey-body__question-type">
						<img src="../img/one-answer.png" /><p>Одиночный выбор</p>
					</button>
					<button onClick={insertClick} onMouseUp={this.hideChoice} data-type="severalAnswers" className="survey-body__question-type">
						<img src="../img/many-answers.png" /><p>Множественный выбор</p>
					</button>
					<button onClick={insertClick} onMouseUp={this.hideChoice} data-type="text" className="survey-body__question-type">
						<i className="fa fa-align-left" aria-hidden="true"></i><p>Текстовый ответ</p>
					</button>
					<button onClick={insertClick} onMouseUp={this.hideChoice} data-type="file" className="survey-body__question-type">
						<i className="fa fa-file-o" aria-hidden="true"></i><p>Файл</p>
					</button>
					<button onClick={insertClick} onMouseUp={this.hideChoice} data-type="rating" className="survey-body__question-type">
						<i className="fa fa-star-o" aria-hidden="true"></i><p>Рейтинг</p>
					</button>
					<button onClick={insertClick} onMouseUp={this.hideChoice} data-type="scale" className="survey-body__question-type">
						<i className="fa fa-sliders" aria-hidden="true"></i><p>Шкала</p>
					</button>
				</div>
				
				<EditButtons 
					id={id}
					deleteClick = {deleteClick}
					editClick = {this.handleOpenModal}
					answersEnabled = {answersEnabled}
				/>

				<ReactModal 
					isOpen={this.state.showModal}
					contentLabel="ScaleQuestionModal"
					onRequestClose={this.handleCloseModal}
					className="question-modal"
					overlayClassName="overlay"
				>
					<QuestionModal
						type = 'scale'
						id = {id}
						question = {question}
						closeClick = {this.handleCloseModal}
						notifySaving = {notifySaving}
					/>
				</ReactModal>

				<div className="survey-body__question-view">
					<h4>{question}</h4>
					<div className="range-slider">
						<input 
							className = "range-slider__range" 
							type = "range"
							disabled = {answersEnabled !== true} 
							defaultValue = "50" 
							min = "0" 
							max = "100"
							onMouseOver = {this.handleMouseOver}
							onChange = {this.handleChange}
							onMouseUp = {this.handleAnswer}
						/>
						<span className="range-slider__value">{this.state.sliderValue}</span>
					</div>
				</div>
			</article>
		);
	};
};

export default ScaleQuestion;