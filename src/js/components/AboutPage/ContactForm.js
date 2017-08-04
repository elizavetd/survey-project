import React from 'react'
import { Field, reduxForm } from 'redux-form'

import submit from '../../lib/submitContact'

let ContactForm = props => {
  const { error, handleSubmit } = props
  return (
		<form className="contact__form"  onSubmit={ handleSubmit(submit) }>
            {error && <h6 className="contact__submit-fail">{error}</h6>}
            <Field 
                name="name"
                type="text"
                component="input"
                placeholder="Ваше имя"
            />
            <Field 
                name="email"
                type="email"
                component="input"
                placeholder="Ваш e-mail"
            />
            <Field 
                name="message"
                component="textarea"
                placeholder="Ваше сообщение"
            />
			<input className="contact__form-button" type="submit" value="Отправить" />
		</form>

  )
}

ContactForm = reduxForm({
  form: 'contact'
})(ContactForm)

export default ContactForm;
