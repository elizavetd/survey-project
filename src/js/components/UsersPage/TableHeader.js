import React from 'react'

const TableHeader = ({ onChange }) => (
    <thead className="table__header">
		<tr>
			<th>Имя
				<div className="triangle-down"></div>
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