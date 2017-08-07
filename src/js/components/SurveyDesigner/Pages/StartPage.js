import React from 'react'

export default class StartPage extends React.Component {
  render() {
    return (
      <section className="survey-body">
		    <form className="survey-start-editor">
			  <button className="survey-body__add-logo"><i className="fa fa-picture-o" aria-hidden="true"></i><p>Добавить изображение</p></button>

			  <input className="survey-body__survey-name" type="text" defaultValue="Название опроса..." />
			  <textarea
          className="survey-body__survey-description"
          defaultValue="Здравствуйте, потратьте, пожалуйста, несколько минут своего времени на заполнение следующей анкеты."
        />

			  <p><select className="survey-body__survey-category" readOnly name="survey-category" defaultValue="-- выберите тип опроса --">
          <option disabled>-- выберите тип опроса --</option>
          <option defaultValue="Услуги">Услуги</option>
          <option defaultValue="Управление кадрами">Управление кадрами</option>
          <option defaultValue="Мероприятия">Мероприятия</option>
          <option defaultValue="Маркентиконговое исследование">Маркентиконговое исследование</option>
          <option defaultValue="Здравоохранение">Здравоохранение</option>
          <option defaultValue="Образование">Образование</option>
        </select></p>
		    </form>
	    </section>
    );
  }
}
