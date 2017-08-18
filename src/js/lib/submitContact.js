import { SubmissionError } from 'redux-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
	return sleep(1000).then(() => {
		// simulate server latency
		if (!values.name || !values.email || !values.message) {
			throw new SubmissionError({
			//  login: 'Неверный логин',
				_error: 'Отправка сообщения не удалась. Проверьте корректность введенных данных.'
			})
		// } else if (!values.password) {
		//   throw new SubmissionError({
		//    // password: 'Неверный пароль',
		//     _error: 'Неверное имя пользователя или пароль. Авторизация не удалась'
		//   })
		} else {
			window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
		}
	});
};

export default submit;