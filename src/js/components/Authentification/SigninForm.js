import React from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { store } from '../../store'
import { requestLogin } from '../../actions/userActions'

import submit from '../../lib/submitSignin'
import RenderField from './RenderField'

const mapDispatchToProps = (dispatch) => {
	return {
		requestLogin: (user) => store.dispatch(requestLogin(user))
	};
};

@connect(mapDispatchToProps)
class SigninForm extends React.Component {
	constructor() {
		super();

		//this.submit = this.submit.bind(this);
	}

	// submit(values) {
	// 	this.props.requestLogin(values)
	// }

	render() {
		const { error, handleSubmit } = this.props
		return (
			<div className="content content_flex">
				<section className="content content_flex content_centered">
					<form className="auth-form" onSubmit={ handleSubmit(submit) }>
						{error && <strong className="auth-form__fail">{error}</strong>}
						<h2 className="auth-form__heading">Вход</h2>
						<Field 
							name="login"
							type="email"
							component={RenderField}
							label="Введите ваш E-mail:"
							placeholder="john.doe@example.com"
						/>
						<Field 
							name="password"
							type="password"
							component={RenderField}
							label="Введите пароль:"
							placeholder="********"
						/>
						<div className="auth-form__help-buttons">
							<p>Еще нет аккаунта? <NavLink className="auth-form__link" to="/signup">Зарегистрируйтесь</NavLink></p>
							<NavLink className="auth-form__link" to="/forgot-password">Забыли пароль?</NavLink>
						</div>
						<input className="auth-form__submit-button" type="submit" value="Войти" />
					</form>
				</section>
			</div>
		);
	};
};

SigninForm = reduxForm({
	form: 'signin'
})(SigninForm)

export default SigninForm;
