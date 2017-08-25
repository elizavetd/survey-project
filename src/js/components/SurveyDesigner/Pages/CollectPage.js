import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../../store'

import Socials from '../Socials'

const mapStateToProps = (store) => {
	return {
		link: store.currentSurvey.id
	};
};

@connect(mapStateToProps)
export default class CollectPage extends React.Component {
	render() {
		const { link } = this.props;

		return (
			<section className="survey-answers-collection">
				<h2>Сбор ответов респондентов</h2>
				<article className="survey-answers-collection__option">
					<p><strong>Скопируйте и пошлите своим респондентам ссылку:</strong></p>
					<p className="survey-answers-collection__link">https://survey-projct.herokuapp.com/survey_{link}</p>
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
	}
}
