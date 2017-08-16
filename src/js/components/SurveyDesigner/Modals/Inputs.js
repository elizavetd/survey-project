import React from 'react'

export class InputRadio extends React.Component {			
  	render() {
        const { placeholder } = this.props;

		return (
			<p>
                <input type="radio" disabled/>
                <input className="question-modal__option" type="text" placeholder={placeholder}/>
                <button><i className="fa fa-trash-o" aria-hidden="true"></i></button>
            </p>
		);
 	}
}

export class InputCheckbox extends React.Component {			
    render() {
        const { placeholder } = this.props;

        return (
            <p>
                <input type="checkbox" disabled/>
                <input className="question-modal__option" type="text" placeholder={placeholder}/>
                <button><i className="fa fa-trash-o" aria-hidden="true"></i></button>
            </p>
        );
    }
}
