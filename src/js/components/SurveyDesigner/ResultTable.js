import React from 'react'
import { NavLink } from 'react-router-dom'

const TableRow = ({ index, user, answer }) => (
    <tr>
        <td className="survey-results__index">{index}</td>
        <td className="survey-results__user">
            <NavLink to={`results/${user}`}>{user}</NavLink>
        </td>
        <td className="survey-results__answer">{answer}</td>
    </tr>
);

const ResultTable = ({ results }) => (
    <div className="survey-results__table">
        <table className="table">
            <thead className="table__header">
                <tr>
                    <th></th>
                    <th>Респондент <div className="triangle-down"></div></th>
                    <th>Ответ</th>
                </tr>
            </thead>

            <tbody>
                {results.map((result, i) =>
                    <TableRow 
                        key = {`${i+1}_${result.user}__${result.answer}`}
                        index = {i+1}
                        user = {result.user}
                        answer = {result.answer}
                    />
                )}
            </tbody>
        </table>
    </div>
);

export default ResultTable;