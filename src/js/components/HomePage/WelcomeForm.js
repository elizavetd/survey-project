import React from 'react'
import { Field, reduxForm } from 'redux-form'

import submit from '../../lib/submitHomepage'

let WelcomeForm = props => {
  const { error, handleSubmit } = props
  return (
    <form className="welcome-section__create-survey"  onSubmit={ handleSubmit(submit) }>
		<fieldset>
			<legend>Создание опроса</legend>
            {error && <strong className="welcome-section__fail">{error}</strong>}
			<Field className="welcome-section__form-input" component="input" type="text" name="surveyName" placeholder="Введите название опроса" />
			<input className="welcome-section__form-button" type="submit" value="+ Добавить вопросы" />
			<p>или</p>
			<a href="/templates">Начните с уже готовых шаблонов →</a>
		</fieldset>
	</form>
  )
}

WelcomeForm = reduxForm({
  form: 'welcomeForm'
})(WelcomeForm)

export default WelcomeForm;