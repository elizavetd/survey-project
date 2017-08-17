import React from 'react'

export class InputRadio extends React.Component {			
  	render() {
        const { id, placeholder, deleteOption, changeOption } = this.props;

		return (
			<p className="question-modal__option-container">
                <input type="radio" disabled/>
                <input onChange={changeOption} data-option={id} className="question-modal__option" type="text" placeholder={placeholder}/>
                <button onClick={deleteOption} data-option={id}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
            </p>
		);
 	}
}

export class InputCheckbox extends React.Component {			
    render() {
        const { id, placeholder, deleteOption, changeOption } = this.props;

        return (
            <p className="question-modal__option-container">
                <input type="checkbox" disabled/>
                <input onChange={changeOption} data-option={id} className="question-modal__option" type="text" placeholder={placeholder}/>
                <button onClick={deleteOption} data-option={id}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
            </p>
        );
    }
}
