import React from 'react'

export default class Students extends React.Component {
  render() {
    return (
        <article className="about-us__article about-us__article_students">
			<div className="opacify"></div>
			<div className="student-content">
				<div>
					<h2 className="about-us__heading">Для студентов</h2>
					<p className="about-us__text">Students Lab** — обучающие курсы для студентов 2-4 курсов IT специальностей и начинающих специалистов. Мы проводим
						обучение по следующим направлениям:</p>
					<img src="https://hhcdn.ru/ichameleon/65669.png" />
					<img src="https://hhcdn.ru/ichameleon/65670.png" />
					<p className="about-us__text">Средняя продолжительность обучения — 3 месяца. Чтобы попасть на курсы, нужно пройти серьезный отбор в несколько этапов,
							включая телефонное интервью, техническое тестирование и очное интервью в компании.</p>
				</div>
			</div>
		</article>
    );
  }
}
