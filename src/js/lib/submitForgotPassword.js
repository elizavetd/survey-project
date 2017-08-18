import { SubmissionError } from 'redux-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function submit(values) {
	return sleep(1000).then(() => {
		if (!(values.email)) {
			throw new SubmissionError({
				email: 'Пожалуйста, введите свой e-mail',
				_error: 'Отправка сообщения не удалась'
			})
		} else {
			window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
		}
	});
};

export default submit;