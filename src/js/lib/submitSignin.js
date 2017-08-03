import { SubmissionError } from 'redux-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
  return sleep(1000).then(() => {
    // simulate server latency
    if (!['admin@ad.min'].includes(values.login)) {
      throw new SubmissionError({
      //  login: 'Неверный логин',
        _error: 'Неверное имя пользователя или пароль. Авторизация не удалась'
      })
    } else if (values.password !== '123') {
      throw new SubmissionError({
       // password: 'Неверный пароль',
        _error: 'Неверное имя пользователя или пароль. Авторизация не удалась'
      })
    } else {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
    }
  });
};

export default submit;