import React from 'react'

const TableHeader = ({ onChange, sortUsers, buttonClass }) => (
	<thead className="table__header">
		<tr>
			{console.log(buttonClass)}
			<th>Имя
				<button	onClick = {sortUsers} >
					<div className = {
						(buttonClass === "down" && "triangle-down") ||
						(buttonClass === "up" && "triangle-up")
					}/>
				</button>

				<div className="search-bar-container">
					<input onChange={onChange} className="search-bar users__search" type="search" placeholder="Найти пользователя" />
					<i className="fa fa-search" aria-hidden="true"></i>
				</div>
			</th>
			<th>Роль</th>
			<th>Зарегистрирован</th>
			<th>Опросы</th>
			<th></th>
		</tr>
	</thead>
);

export default TableHeader;