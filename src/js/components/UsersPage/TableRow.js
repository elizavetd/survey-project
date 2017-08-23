import React from "react"

import UserOperations from './UserOperations'

export default class TableRow extends React.Component {
	render() {
		const { username, id, role, signupDate,	surveysCount } = this.props;

		return (
			<tr>
				<td data-th="Имя" className="user-name">{username}</td>
				<td data-th="Роль" className="user-role">{role}</td>
				<td data-th="Зарегистрирован" className="user-signup-date">{signupDate}</td>
				<td data-th="Опросы" className="user-surveys">{surveysCount}</td>
				<UserOperations id={id} />
			</tr>
		);
	};
};