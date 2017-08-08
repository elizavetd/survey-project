import React from 'react'
import { NavLink } from 'react-router-dom'

import PaginationBar from '../../PaginationBar'

import OneAnswerResult from '../QuestionResults/OneAnswerResult'
import MultipleAnswersResult from '../QuestionResults/MultipleAnswersResult'
import TextResult from '../QuestionResults/TextResult'
import FileResult from '../QuestionResults/FileResult'
import RatingResult from '../QuestionResults/RatingResult'
import ScaleResult from '../QuestionResults/ScaleResult'

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
			<TextResult
				answered = {112}
				skipped = {0}
				results = {[
					{user: 'ralph.graves32', answer: 'Ответ'},
					{user: 'stacey.fernandez', answer: 'Привет'},
					{user: 'tony.smith64', answer: 'Пакет'},
					{user: 'anna.anna', answer: 'Жакет'},
					{user: 'zhanna.zhanna', answer: 'Паркет'},
					{user: 'ivan', answer: 'Мушкет'},
					{user: 'trolleybus666', answer: 'Берет'}
				]}
			/>
			<FileResult
				answered = {110}
				skipped = {2}
				results = {[
					{user: 'ralph.graves32', answer: 'report.pdf'},
					{user: 'stacey.fernandez', answer: 'image.jpg'},
					{user: 'tony.smith64', answer: 'document.docx'}
				]}
			/>
			<RatingResult
				answered = {109}
				skipped = {3}
				results = {[
					{option: 1, value: 9},
					{option: 2, value: 25},
					{option: 3, value: 50},
					{option: 4, value: 45},
					{option: 5, value: 5}
				]}
			/>
			<ScaleResult
				answered = {4}
				skipped = {108}
				results = {[
					{user: 'anna.anna', answer: 55},
					{user: 'zhanna.zhanna', answer: 87},
					{user: 'ivan', answer: 68},
					{user: 'trolleybus666', answer: 93}
				]}
			/>
			<PaginationBar hasSideInfo = {false} hasPadding = {false} />
		</section>
    );
  }
}
