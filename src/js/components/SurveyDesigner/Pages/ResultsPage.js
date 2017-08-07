import React from 'react'
import { NavLink } from 'react-router-dom'

import PaginationBar from '../../PaginationBar'

import OneAnswerResult from '../QuestionResults/OneAnswerResult'
import MultipleAnswersResult from '../QuestionResults/MultipleAnswersResult'

export default class ResultsPage extends React.Component {
  render() {
    return (
        <section className="survey-results">
				<h2>Просмотр ответов </h2>
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

				<OneAnswerResult 
					answered = {112}
					skipped = {0}
					results = {[
						{option: 'Вариант ответа 1', value: 14},
						{option: 'Вариант ответа 2', value: 12},
						{option: 'Вариант ответа 3', value: 7},
						{option: 'Вариант ответа 4', value: 6},
						{option: 'Вариант ответа 5', value: 25},
						{option: 'Вариант ответа 6', value: 9},
						{option: 'Вариант ответа 7', value: 5},
						{option: 'Вариант ответа 8', value: 13},
						{option: 'Вариант ответа 9', value: 4},
						{option: 'Вариант ответа 10', value: 17}
					]}
				/>

				<MultipleAnswersResult 
					answered = {100}
					skipped = {12}
					results = {[
						{option: 'Первый вариант', value: 78},
						{option: 'Второй вариант', value: 55},
						{option: 'Третий вариант', value: 92}
					]}
				/>

				{/* <article className="survey-results__question-result survey-results__question-result_one-answer">
					<h4 className="survey-results__question-title">Вопрос с несколькими вариантами ответа</h4>
					<div className="survey-results__question-info">
						<p>Ответили: 100</p>
						<p>Пропустили: 12</p>
					</div>
					<div className="survey-results__graph">
						<div className="bar-chart primary" data-total="78" >
							<span className="bar-chart__inner" style={{'width':'78%'}}>
								<span className="bar-chart__text">78%</span>
							</span>
						</div>

						<div className="bar-chart secondary" data-total="55" >
							<span className="bar-chart__inner" style={{'width':'55%'}}>
								<span className="bar-chart__text">55%</span>
							</span>
						</div>

						<div className="bar-chart tertiary" data-total="92" >
							<span className="bar-chart__inner" style={{'width':'92%'}}>
								<span className="bar-chart__text">92%</span>
							</span>
						</div>
					</div>
					<div className="survey-results__answer-percentage">
						<p>Ответ 1: 78% (80 ответов)</p>
						<p>Ответ 2: 55% (61 ответов)</p>
						<p>Ответ 3: 92% (100 ответов)</p>
					</div>
				</article> */}

				<article className="survey-results__question-result survey-results__question-result_text-answer">
					<h4 className="survey-results__question-title">Вопрос с текстовым ответом</h4>
					<div className="survey-results__question-info">
						<p>Ответили: 112</p>
						<p>Пропустили: 0</p>
					</div>
					<div className="survey-results__table">
						<table className="table">
							<thead className="table__header">
								<tr>
									<th>Респондент
										<div className="triangle-down"></div>
									</th>
									<th>Ответ</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td className="survey-results__user"><a href="/user-result">ralph.graves32</a></td>
									<td className="survey-results__answer">Ответ</td>
								</tr>
								<tr>
									<td className="survey-results__user"><a href="/user-result">stacey.fernandez</a></td>
									<td className="survey-results__answer">Тру-ля-ля</td>
								</tr>
								<tr>
									<td className="survey-results__user"><a href="/user-result">tony.smith64</a></td>
									<td className="survey-results__answer">Тра-ля-ля</td>
								</tr>
								<tr>
									<td className="survey-results__user"><a href="/user-result">ralph.graves32</a></td>
									<td className="survey-results__answer">Ответ</td>
								</tr>
								<tr>
									<td className="survey-results__user"><a href="/user-result">stacey.fernandez</a></td>
									<td className="survey-results__answer">Тру-ля-ля</td>
								</tr>
								<tr>
									<td className="survey-results__user"><a href="/user-result">tony.smith64</a></td>
									<td className="survey-results__answer">Тра-ля-ля</td>
								</tr>
								<tr>
									<td className="survey-results__user"><a href="/user-result">ralph.graves32</a></td>
									<td className="survey-results__answer">Ответ</td>
								</tr>
								<tr>
									<td className="survey-results__user"><a href="/user-result">stacey.fernandez</a></td>
									<td className="survey-results__answer">Тру-ля-ля</td>
								</tr>
								<tr>
									<td className="survey-results__user"><a href="/user-result">tony.smith64</a></td>
									<td className="survey-results__answer">Тра-ля-ля</td>
								</tr>
							</tbody>
						</table>
					</div>
				</article>

				<article className="survey-results__question-result survey-results__question-result_file">
					<h4 className="survey-results__question-title">Вопрос-файл</h4>
					<div className="survey-results__question-info">
						<p>Ответили: 112</p>
						<p>Пропустили: 0</p>
					</div>
					<div className="survey-results__table">
						<table className="table">
							<thead className="table__header">
								<tr>
									<th>Респондент
										<div className="triangle-down"></div>
									</th>
									<th>Ответ</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td className="survey-results__user"><a href="/user-result">ralph.graves32</a></td>
									<td className="survey-results__answer"><a href="/">report.pdf</a></td>
								</tr>
								<tr>
									<td className="survey-results__user"><a href="/user-result">stacey.fernandez</a></td>
									<td className="survey-results__answer"><a href="/">image.png</a></td>
								</tr>
								<tr>
									<td className="survey-results__user"><a href="/user-result">tony.smith64</a></td>
									<td className="survey-results__answer"><a href="/">doc.docx</a></td>
								</tr>
							</tbody>
						</table>
					</div>
				</article>

				<article className="survey-results__question-result survey-results__question-result_rating">
					<h4 className="survey-results__question-title">Вопрос-рейтинг</h4>
					<div className="survey-results__question-info">
						<p>Ответили: 100</p>
						<p>Пропустили: 12</p>
					</div>
					<div className="survey-results__graph">
						<div className="bar-chart primary" data-total="15" >
							<span className="bar-chart__inner" style={{'width':'15%'}}>
								<span className="bar-chart__text">15%</span>
							</span>
						</div>

						<div className="bar-chart secondary" data-total="10" >
							<span className="bar-chart__inner" style={{'width':'10%'}}>
								<span className="bar-chart__text">10%</span>
							</span>	
						</div>

						<div className="bar-chart primary" data-total="25" >
							<span className="bar-chart__inner" style={{'width':'25%'}}>
								<span className="bar-chart__text">25%</span>
							</span>	
						</div>

						<div className="bar-chart tertiary" data-total="45" >
							<span className="bar-chart__inner" style={{'width':'45%'}}>
								<span className="bar-chart__text">45%</span>
							</span>	
						</div>

						<div className="bar-chart tertiary" data-total="5" >
							<span className="bar-chart__inner" style={{'width':'5%'}}>
								<span className="bar-chart__text">5%</span>
							</span>	
						</div>
					</div>
					<div className="survey-results__answer-percentage">
						<p>☆: 10% (52 ответов)</p>
						<p>☆☆: 15% (38 ответов)</p>
						<p>☆☆☆: 25% (22 ответов)</p>
						<p>☆☆☆☆: 25% (38 ответов)</p>
						<p>☆☆☆☆☆: 5% (22 ответов)</p>
					</div>
				</article>

				<article className="survey-results__question-result survey-results__question-result_scaler">
					<h4 className="survey-results__question-title">Вопрос-шкала</h4>
					<div className="survey-results__question-info">
						<p>Ответили: 101</p>
						<p>Пропустили: 11</p>
					</div>
					<div className="survey-results__answer-percentage">
						<p>Средняя оценка: 76.3 (101 ответов)</p>
					</div>
				</article>

				<PaginationBar hasSideInfo = {false} hasPadding = {false} />

			</section>
    );
  }
}
