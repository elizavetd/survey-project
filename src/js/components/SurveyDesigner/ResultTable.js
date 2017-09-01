import React from 'react'
import { NavLink } from 'react-router-dom'

const TableRow = ({ index, user, answer }) => (
	<tr>
		<td className="table__number-column">{index}</td>
		<td className="table__user-column">
			<NavLink to={`results/${user}`}>{user}</NavLink>
		</td>
		<td className="table__answer-column">{answer}</td>
	</tr>
);

const ResultTable = ({ results }) => (
	<div className="survey-results__table">
		<table className="table">
			<thead className="table__header">
				<tr>
					<th className="table__number-column"></th>
					<th className="table__user-column">
						{/* <input className="survey-results__table-search" type="search" placeholder={'Найти пользователя'} /> */}
						Респондент
						<div className="triangle-down"></div>
						
					</th>
					<th className="table__answer-column">Ответ</th>
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