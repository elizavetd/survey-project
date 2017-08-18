import { SubmissionError } from 'redux-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
	return sleep(1000).then(() => {
		// simulate server latency
		if (['name'].includes(values.surveyName)) {
			throw new SubmissionError({
				_error: 'Опрос с таким названием уже существует'
			})
		} else {
			window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
		}
	});
};

export default submit;