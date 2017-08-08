import React from 'react'
import { NavLink } from 'react-router-dom'

import PaginationBar from '../../PaginationBar'

import OneAnswerUserResult from '../UserResults/OneAnswerUserResult'
import MultipleAnswersUserResult from '../UserResults/MultipleAnswersUserResult'
import TextUserResult from '../UserResults/TextUserResult'
import FileUserResult from '../UserResults/FileUserResult'
import RatingUserResult from '../UserResults/RatingUserResult'
import ScaleUserResult from '../UserResults/ScaleUserResult'

export default class ResultsPage extends React.Component {
  render() {
    return (
        <section className="survey-results">
			<h2>Просмотр ответов {this.props.match.params[0]}</h2>
			<div className="survey-results__info">
				<p>Вопросов: 12, страниц: 3</p>
				<p>Всего ответов: 112</p>
			</div>
			<div className="survey-results__nav-buttons">
				<NavLink exact to='/new-survey/results' activeClassName="survey-results__nav-buttons_current"><button>Сводные данные по вопросам</button></NavLink>
				<NavLink to='/new-survey/results/user111' activeClassName="survey-results__nav-buttons_current"><button>Отдельные ответы</button></NavLink>
			</div>
			<p className="survey-results__view-option"><select defaultValue="Все вопросы">
				<option>Все вопросы</option>
				<option value="Какие-то вопросы">Какие-то вопросы</option>
				<option value="Другие вопросы">Другие вопросы</option>
			</select></p>
			<PaginationBar 
				hasSideInfo = {true}
				itemCountCaption="Вопросов:"
				itemCount = {12}
				pageNumber={1}
				pageCount = {3}
			/>

			<MultipleAnswersUserResult	results = {[2, 3]} />
			<OneAnswerUserResult result = {4} />
			<TextUserResult 
				result = 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый, разделенный	дугообразными чешуйками живот, на верхушке которого еле держалось готовое вот-вот окончательно сползти одеяло.'
			/>
			<FileUserResult result = 'smth.pdf' />
			<RatingUserResult result = {4} />
			<ScaleUserResult result = {73} />
			
			<PaginationBar hasSideInfo = {false} hasPadding = {false} />
		</section>
    );
  }
}
