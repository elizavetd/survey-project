import { SubmissionError } from 'redux-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
	return sleep(1000).then(() => {
		// simulate server latency
		if (['admin@ad.min'].includes(values.email) ||
				['admin'].includes(values.username)) {
			throw new SubmissionError({
				username: 'Пользователь с таким именем или электронной почтой уже существует',
				_error: 'Регистрация не удалась'
			})
		} else if (values.password !== values.passwordSubmit) {
			throw new SubmissionError({
				password: 'Пароль не совпадает',
				_error: 'Регистрация не удалась'
			})
		} else {
			window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
		}
	});
};

export default submit;