import React from 'react'
import { Field, reduxForm } from 'redux-form'

import submit from '../../lib/submitSignin'
import RenderField from './RenderField'

let SigninForm = props => {
  const { error, handleSubmit } = props
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
 				<p>Еще нет аккаунта? <a className="auth-form__link" href="/signup">Зарегистрируйтесь</a></p>
 				<a className="auth-form__link" href="#">Забыли пароль?</a>
 			</div>
 			<input className="auth-form__submit-button" type="submit" value="Войти" />
        </form>
    </section>
    </div>
  )
}

SigninForm = reduxForm({
  form: 'signin'
})(SigninForm)

export default SigninForm;







// export default class Authentification extends React.Component {

//   render() {
//     return (
//         <div className="content content_flex">
// 		<section className="content content_flex content_centered">
// 			<form className="auth-form">
// 				<h2 className="auth-form__heading">Вход</h2>
// 				<label className="auth-form__label">Введите ваш E-mail:</label>
// 				<input className="auth-form__input" type="email" name="login" placeholder="john.doe@example.com" />
// 				<label className="auth-form__label">Введите пароль:</label>
// 				<input className="auth-form__input" type="password" name="password" placeholder="********" />
// 				<div className="auth-form__help-buttons">
// 					<p>Еще нет аккаунта? <a className="auth-form__link" href="/signup">Зарегистрируйтесь</a></p>
// 					<a className="auth-form__link" href="#">Забыли пароль?</a>
// 				</div>
// 				<input className="auth-form__submit-button" type="submit" value="Войти" />
// 			</form>
// 		</section>
// 	</div>
//     );
//   };
// };