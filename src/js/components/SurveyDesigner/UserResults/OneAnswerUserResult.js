import React from 'react'

const OneAnswerUserResult = ({ result }) => (
    <article className="survey-results__question-result survey-results__question-result_one-answer">
        <h4 className="survey-results__question-title">Вопрос с одним вариантом ответа</h4>
        <p className="survey-results__answer-percentage">Ответ {result}</p>
    </article>
)

export default OneAnswerUserResult;