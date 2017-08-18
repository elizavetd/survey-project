import React from 'react'

export default class FinishPage extends React.Component {
	render() {
		return (
				<section className="survey-body">
					<form className="survey-finish-editor">
						<textarea className="survey-body__survey-name">Благодарим за прохождение опроса!</textarea>
						<textarea className="survey-body__survey-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</textarea>
					</form>
				</section>
		);
	}
}
