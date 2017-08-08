import React from 'react'

import ResultTable from '../ResultTable'

const TextResult = ({
    answered,
    skipped,
    results
}) => (
    <article className="survey-results__question-result survey-results__question-result_text-answer">
        <h4 className="survey-results__question-title">Вопрос с текстовым ответом</h4>
        <div className="survey-results__question-info">
            <p>Ответили: {answered}</p>
            <p>Пропустили: {skipped}</p>
        </div>
        <ResultTable results = {results} />        
    </article>
)

export default TextResult;