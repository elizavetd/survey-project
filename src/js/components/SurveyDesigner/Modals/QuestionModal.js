import React from 'react'
//import { connect } from 'react-redux'

import { InputRadio, InputCheckbox } from './Inputs'

// @connect((store) => {
//     return {
//         questions: store.currentSurvey.questionList
//     };
// })
export default class QuestionModal extends React.Component {			
  	render() {
        const { type, closeClick } = this.props;
		return (
			<div className="question-modal">
                <input className="question-modal__title" type="text" placeholder="Напишите свой вопрос здесь"/>
                { (type === 'oneAnswer' || type === 'severalAnswers') && 
                    <input className="question-modal__button-add" type="button" value="+"/>
                }
                
                { (type === 'oneAnswer' ) &&
                    <div>
                        <InputRadio
                            placeholder = "Вариант 1"
                        />
                        <InputRadio
                            placeholder = "Вариант 2"
                        />
                        <InputRadio
                            placeholder = "Вариант 3"
                        />
                    </div>
                }

                { (type === 'severalAnswers' ) &&
                    <div>
                        <InputCheckbox
                            placeholder = "Вариант 1"
                        />
                        <InputCheckbox
                            placeholder = "Вариант 2"
                        />
                        <InputCheckbox
                            placeholder = "Вариант 3"
                        />
                    </div>
                }

                <div>
                    <input className="question-modal__submit" type="submit" value="Сохранить"/>
                    <input onClick={closeClick} className="question-modal__close" type="button" value="Отмена"/>
                </div>
            </div>
		);
 	}
}


