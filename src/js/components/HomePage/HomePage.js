import React from 'react'

import WelcomeForm from './WelcomeForm'

export default class HomePage extends React.Component {
  render() {
    return (
        <div className="content">
		<section className="welcome-section">
			<img src="./img/1.png" />
			<div className="welcome-section__content">
				<div className="welcome-section__text">
					<h1 className="welcome-section__heading">Создать опрос просто!</h1>
					<ul>
						<li>
							<h4 className="welcome-section__list-item">Добавляйте вопросы:</h4>
							<p className="welcome-section__description">Удобный конструктор анкет с шаблонами. 6 типов вопросов и настройка логических правил.</p>
						</li>
						<li>
							<h4 className="welcome-section__list-item">Получайте ответы:</h4>
							<p className="welcome-section__description">Разошлите по электронной почте, укажите ссылку на веб-страницу или опубликуйте в социальных сетях.</p>
						</li>
						<li>
							<h4 className="welcome-section__list-item">Анализируйте результат:</h4>
							<p className="welcome-section__description">Просматривайте результаты опроса в удобном формате в виде графиков и диаграмм.</p>
						</li>
					</ul>
				</div>
				<WelcomeForm />
			</div>
		</section>

	</div>
    );
  }
}
