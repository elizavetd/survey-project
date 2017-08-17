import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../../store'
import { editQuestion } from '../../../actions/questionActions'
import generateId from '../../../lib/generateUniqueID'

import { InputRadio, InputCheckbox } from './Inputs'

const mapStateToProps = (store) => {
    return {
        questions: store.currentSurvey.questionList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editQuestion: question => dispatch(editQuestion(question))
    }
};

@connect(mapStateToProps, mapDispatchToProps)
export default class QuestionModal extends React.Component {	
    constructor() {
		super();

		this.state = {
			currentQuestion: false
		};

        this.addOption = this.addOption.bind(this);
        this.deleteOption = this.deleteOption.bind(this);
        this.changeOption = this.changeOption.bind(this);
        this.changeQuestion = this.changeQuestion.bind(this);
        this.saveQuestion = this.saveQuestion.bind(this);
    }		
    
    addOption() {
        let newOption = this.state.currentQuestion.options.concat([{
            id: generateId(),
            value: `Вариант`
        }]);

        this.setState({
            currentQuestion: Object.assign(
                this.state.currentQuestion, 
                {options: newOption}
            )
        });
    }

    deleteOption(e) {
        e.preventDefault();

        let optionToDelete = e.currentTarget.dataset.option;
        const index = this.state.currentQuestion.options.findIndex(
            element => (element.id === optionToDelete)
        );
        const newOptions = [
            ...this.state.currentQuestion.options.slice(0, index),
            ...this.state.currentQuestion.options.slice(index + 1)
        ];

        this.setState({
            currentQuestion: Object.assign(
                this.state.currentQuestion, 
                {options: newOptions}
            )
        });
    }

    changeOption(e) {
        console.log(e.currentTarget.value)

        let optionToChange = e.currentTarget.dataset.option;
        const index = this.state.currentQuestion.options.findIndex(
            element => (element.id === optionToChange)
        );

        const newOptions = [
            ...this.state.currentQuestion.options.slice(0, index),
            {
                id: optionToChange,
                value: e.currentTarget.value
            },
            ...this.state.currentQuestion.options.slice(index + 1)
        ];

        this.setState({
            currentQuestion: Object.assign(
                this.state.currentQuestion, 
                {options: newOptions}
            )
        });
    }

    changeQuestion(e) {
        this.setState({
            currentQuestion: Object.assign(
                this.state.currentQuestion, 
                {question: e.currentTarget.value}
            )
        });
    }

    saveQuestion(e) {
        e.preventDefault();
        
        console.log(this)
        this.props.editQuestion(this.state.currentQuestion);
        this.props.notifySaving(this.state.currentQuestion.id)
        this.props.closeClick();

        
    }

  	render() {
        const { questions, id, type, options, question, closeClick, notifySaving } = this.props;

        const index = questions.findIndex(
            element => (element.id === id)
        )
        if (!this.state.currentQuestion)
            this.state.currentQuestion = questions[index];

        console.log(this.state);

		return (
			<form onSubmit={this.saveQuestion} className="question-modal">
                <input 
                    onChange={this.changeQuestion} 
                    data-option={id} 
                    className="question-modal__title" 
                    type="text" 
                    placeholder={question}
                />
                
                { (type === 'oneAnswer' ) && 
                  this.state.currentQuestion.options.map( option =>
                    <InputRadio
                        key = {option.id}
                        id = {option.id}
                        placeholder = {option.value}
                        deleteOption = {this.deleteOption}
                        changeOption = {this.changeOption}
                    />
                )}

                { (type === 'severalAnswers' ) && 
                  this.state.currentQuestion.options.map( option =>
                    <InputCheckbox
                        key = {option.id}
                        id = {option.id}
                        placeholder = {option.value}
                        deleteOption = {this.deleteOption}
                        changeOption = {this.changeOption}
                    />
                )}

                { (type === 'oneAnswer' || type === 'severalAnswers') && 
                    <input onClick={this.addOption} className="question-modal__button-add" type="button" value="+"/>
                }

                <div className="question-modal__submit-container">
                    <input className="question-modal__submit" type="submit" value="Сохранить"/>
                    <input onClick={closeClick} className="question-modal__close" type="button" value="Отмена"/>
                </div>
            </form>
		);
 	}
}


