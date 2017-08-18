import React from 'react'

export default class SettingsPage extends React.Component {
	render() {
		return (
			<section className="survey-settings">
				<h2>Параметры опроса</h2>
				<div className="survey-settings__settings-list">
					<p>
						<input type="checkbox" />
						<label htmlFor="c1">Анонимный опрос</label>
					</p>
					<p>
						<input type="checkbox" defaultChecked />
						<label htmlFor="c2">Номера вопросов</label>
					</p>
					<p>
						<input type="checkbox" defaultChecked />
						<label htmlFor="c3">Номера страниц</label>
					</p>
					<p>
						<input type="checkbox" />
						<label htmlFor="c1">Случайный порядок вопросов</label>
					</p>
					<p>
						<input type="checkbox" defaultChecked />
						<label htmlFor="c2">Звездочки обязательных полей</label>
					</p>
					<p>
						<input type="checkbox" defaultChecked />
						<label htmlFor="c3">Индикатор выполнения</label>
					</p>
				</div>
			</section>
		);
	}
}
