import React from "react"

import TablePagination from './TablePagination'

const TableFooter = ({ 
	userCount,
	pageNumber,
	pageCount,
	toStart,
	prev,
	next,
	toEnd
}) => (
	<tfoot>
		<tr className="table__footer">
			<th colSpan="1">Всего пользователей: {userCount}</th>
			<TablePagination 
				toStart = {toStart}
				prev = {prev}
				next = {next}
				toEnd = {toEnd}
				pageNumber = {pageNumber}
				pageCount = {pageCount}
			/>
			<th colSpan="2">Страница {pageNumber}/{pageCount}</th>
		</tr>
	</tfoot>
);

export default TableFooter;