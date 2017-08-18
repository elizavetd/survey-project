import React from "react"

import TablePagination from './TablePagination'

const TableFooter = ({ userCount }) => (
	<tfoot>
		<tr className="table__footer">
			<th colSpan="4">Всего пользователей: {userCount}</th>
			<TablePagination />
		</tr>
	</tfoot>
);

export default TableFooter;