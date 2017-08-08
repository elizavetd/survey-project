import React from 'react'

const TextUserResult = ({ result }) => (
    <article className="survey-results__question-result survey-results__question-result_text-answer">
        <h4 className="survey-results__question-title">Вопрос с текстовым ответом</h4>
        <p className="survey-results__answer-percentage">{result}</p>
    </article>
)

export default TextUserResult;