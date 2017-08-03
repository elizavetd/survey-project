import React from "react"

import UserOperations from './UserOperations'

const TableRow = ({ 
    username,
    role,
    signupDate,
    surveysCount
}) => (
    <tr>
		<td data-th="Имя" className="user-name">{username}</td>
		<td data-th="Роль" className="user-role">{role}</td>
		<td data-th="Зарегистрирован" className="user-signup-date">{signupDate}</td>
		<td data-th="Опросы" className="user-surveys">{surveysCount}</td>
		<UserOperations />
	</tr>
);

export default TableRow;