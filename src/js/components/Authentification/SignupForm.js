import React from 'react'
import { Field, reduxForm } from 'redux-form'

import submit from '../../lib/submitSignup'
import RenderField from './RenderField'

let SignupForm = props => {
  const { error, handleSubmit } = props
  return (
    <div className="content content_flex">
    <section className="content content_flex content_centered">
        <form className="auth-form" onSubmit={ handleSubmit(submit) }>
            {error && <strong className="auth-form__fail">{error}</strong>}
            <h2 className="auth-form__heading">Регистрация</h2>
            <Field 
                name="name"
                type="text"
                component={RenderField}
                label="Выберите имя пользователя:"
                placeholder="John Doe"
            />
            <Field 
                name="login"
                type="email"
                component={RenderField}
                label="Введите свой адрес электронной почты:"
                placeholder="john.doe@example.com"
            />
            <div className="auth-form__group">
                <Field 
                    name="password"
                    type="password"
                    component={RenderField}
                    label="Выберите пароль:"
                    placeholder="********"
                />
                <Field 
                    name="passwordSubmit"
                    type="password"
                    component={RenderField}
                    label="Подтвердите пароль:"
                    placeholder="********"
                />
            </div>
 			<div className="auth-form__help-buttons">
 				<p>Есть аккаунт? <a className="auth-form__link" href="/signin">Вход</a></p>
 			</div>
 			<input className="auth-form__submit-button auth-form__submit-button_signup" type="submit" value="Создать аккаунт" />
        </form>
    </section>
    </div>
  )
}

SignupForm = reduxForm({
  form: 'signup'
})(SignupForm)

export default SignupForm;
