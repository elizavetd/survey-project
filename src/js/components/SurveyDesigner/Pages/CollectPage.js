import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { store } from '../../../store'

import Socials from '../Socials'

const mapStateToProps = (store) => {
	return {
		id: store.currentSurvey.id
	};
};

@connect(mapStateToProps)
export default class CollectPage extends React.Component {
	render() {
		const { id } = this.props;

		return (
			<section className="survey-answers-collection">
				<h2>Сбор ответов респондентов</h2>
				<article className="survey-answers-collection__option">
					<p><strong>Скопируйте и пошлите своим респондентам ссылку:</strong></p>
					<NavLink to={`/survey_${id}`} className="survey-answers-collection__link">
						<p >https://survey-projct.herokuapp.com/survey_{id}</p>
					</NavLink>
					<p><strong>Поделиться опросом:</strong></p>
					<Socials />
				</article>
				<article className="survey-answers-collection__option">
					<h3>E-mail приглашение</h3>
					<p>Пригласите участников опроса по электронной почте.</p>
					<button className="survey-answers-collection__button">Отправить приглашение</button>
				</article>
				<article className="survey-answers-collection__option">
					<h3>Печать анкеты</h3>
					<p>Скачайте анкету в формате PDF, подходящем для печати.</p>
					<button className="survey-answers-collection__button">Скачать</button>
				</article>
			</section>
		);
	};
};
