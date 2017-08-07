import React from 'react'
import { NavLink } from 'react-router-dom'

import PaginationBar from '../../PaginationBar'

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
					<NavLink to='/new-survey/results'><button className="survey-results__nav-buttons_current">Сводные данные по вопросам</button></NavLink>
					<NavLink to='/new-survey/results/user111'><button>Отдельные ответы</button></NavLink>
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

				<article className="survey-results__question-result survey-results__question-result_several-answers">
					<h4 className="survey-results__question-title">Вопрос с несколькими вариантами ответа</h4>
					<div className="survey-results__answer-percentage">
						<p>Ответ 2</p>
						<p>Ответ 3</p>
					</div>
				</article>

				<article className="survey-results__question-result survey-results__question-result_one-answer">
					<h4 className="survey-results__question-title">Вопрос с одним вариантом ответа</h4>
					<p className="survey-results__answer-percentage">Ответ 1</p>
				</article>

				<article className="survey-results__question-result survey-results__question-result_text-answer">
					<h4 className="survey-results__question-title">Вопрос с текстовым ответом</h4>
					<p className="survey-results__answer-percentage">Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное
						насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый, разделенный
						дугообразными чешуйками живот, на верхушке которого еле держалось готовое вот-вот окончательно сползти одеяло.</p>
				</article>

				<article className="survey-results__question-result survey-results__question-result_file">
					<h4 className="survey-results__question-title">Вопрос-файл</h4>
					<a href="#" className="survey-results__answer-percentage">smth.pdf</a>
				</article>

				<article className="survey-results__question-result survey-results__question-result_rating">
					<h4 className="survey-results__question-title">Вопрос-рейтинг</h4>
					<div className="survey-results__answer-percentage" className="rating-stars">
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star-o" aria-hidden="true"></i>
						<i className="fa fa-star-o" aria-hidden="true"></i>
					</div>
				</article>

				<article className="survey-results__question-result survey-results__question-result_scaler">
					<h4 className="survey-results__question-title">Вопрос-шкала</h4>
					<div className="range-slider">
						<input className="range-slider__range" type="range" value="70" readOnly min="0" max="100" />
						<span className="range-slider__value">70</span>
					</div>
				</article>

                <PaginationBar hasSideInfo = {false} hasPadding = {false} />

			</section>
    );
  }
}
