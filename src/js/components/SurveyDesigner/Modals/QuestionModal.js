import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../../store'
import { editQuestion } from '../../../actions/questionActions'

import { InputRadio, InputCheckbox } from './Inputs'

@connect((store) => {
    return {
        questions: store.currentSurvey
    };
})
export default class QuestionModal extends React.Component {	
    constructor() {
		super();

		this.state = {
			currentQuestion: 'ololo'
		};

		this.addOption = this.addOption.bind(this);
    }		
    
    addOption() {

    }

  	render() {
        const { questions, id, type, options, question, closeClick } = this.props;
        //Найти индекс по айди
        //if (!this.state.currentQuestion) {
            this.state.currentQuestion = questions.questionList
        //}

        console.log(this.state)

		return (
			<form className="question-modal">
                <input className="question-modal__title" type="text" placeholder={question}/>
                { (type === 'oneAnswer' || type === 'severalAnswers') && 
                    <input onClick={this.addOption} className="question-modal__button-add" type="button" value="+"/>
                }
                
                { (type === 'oneAnswer' ) && options.map( option =>
                    <InputRadio
                        key = {option}
                        placeholder = {option}
                    />
                )}

                { (type === 'severalAnswers' ) && options.map( option =>
                    <InputCheckbox
                        key = {option}
                        placeholder = {option}
                    />
                )}

                <div>
                    <input className="question-modal__submit" type="submit" value="Сохранить"/>
                    <input onClick={closeClick} className="question-modal__close" type="button" value="Отмена"/>
                </div>
            </form>
		);
 	}
}


