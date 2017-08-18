import React from 'react'

const NewQuestion = ({ onClick, questionClick, isChoosingMode }) => (
	<article>
		{(!isChoosingMode) && <div className="survey-body__new-question survey-body__new-question_add-button">
			<p className="survey-body__text">На этой странице еще ничего нет. Создайте вопрос!</p>
			<button onClick={onClick} className="survey-body__add-button"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
		</div>}

		{(isChoosingMode) && <div className="survey-body__new-question survey-body__new-question_list">
			<button onClick={questionClick} data-type="oneAnswer" className="survey-body__question-type">
				<img src="../img/one-answer.png" /><p>Одиночный выбор</p>
			</button>
			<button onClick={questionClick} data-type="severalAnswers" className="survey-body__question-type">
				<img src="../img/many-answers.png" /><p>Множественный выбор</p>
			</button>
			<button onClick={questionClick} data-type="text" className="survey-body__question-type">
				<i className="fa fa-align-left" aria-hidden="true"></i><p>Текстовый ответ</p>
			</button>
			<button onClick={questionClick} data-type="file" className="survey-body__question-type">
				<i className="fa fa-file-o" aria-hidden="true"></i><p>Файл</p>
			</button>
			<button onClick={questionClick} data-type="rating" className="survey-body__question-type">
				<i className="fa fa-star-o" aria-hidden="true"></i><p>Рейтинг</p>
			</button>
			<button onClick={questionClick} data-type="scale" className="survey-body__question-type">
				<i className="fa fa-sliders" aria-hidden="true"></i><p>Шкала</p>
			</button>
		</div>}
	</article>
)

export default NewQuestion;
