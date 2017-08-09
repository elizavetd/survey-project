import React from 'react'
import ReactDOM from 'react-dom'
import { Field, reduxForm } from 'redux-form'

import {store} from '../../store'

import submit from '../../lib/submitForgotPassword'
import RenderField from './RenderField'

const submitSuccess = () => {
    document.getElementById('forget-password-form').style.display = 'none';
    document.getElementById('success-message').style.display = 'block';
}

class ForgotPassword extends React.Component {
    render() {
        const error = this.props.error;
        const handleSubmit = this.props.handleSubmit;
  
        return (
            <div className="content content_flex">
                <section id="forget-password-form" className="content content_flex content_centered">
                    <form className="auth-form" onSubmit={ handleSubmit(submit) }>
                        {error && <strong className="auth-form__fail">{error}</strong>}
                        <h2 className="auth-form__heading">Забыли пароль?</h2>
                        <p className="auth-form__text">Чтобы изменить пароль, воспользуйтесь формой ниже. Мы отправим Вам сообщение на электронную почту со ссылкой на изменение пароля.</p>
                        <Field 
                            name="email"
                            type="email"
                            component={RenderField}
                            label=""
                            placeholder="john.doe@example.com"
                        />
                        <input className="auth-form__submit-button" type="submit" value="Продолжить" />
                    </form>
                </section>
                <div className="success-message" id="success-message">
                    <p><strong>Следите за своей почтой — мы только что отправили Вам ссылку для сброса пароля.</strong></p>
                    <p>Если Вы ничего не получили, проверьте свою папку для спама, а затем повторите попытку.</p>
                </div>
            </div>
        )
    }
}

ForgotPassword = reduxForm({
  form: 'forgot_password',
  onSubmitSuccess: submitSuccess
})(ForgotPassword)

export default ForgotPassword;
