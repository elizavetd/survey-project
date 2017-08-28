import React from 'react'

export default class TablePagination extends React.Component {
	render() {
		const {toStart, prev, next, toEnd, pageNumber, pageCount} = this.props;

		return (
			<th colSpan="2" className="table__footer-buttons">

				<button
					className="table__button-to-start"
					onClick = {toStart}
					disabled = {pageNumber === 1}
				>
					<i className="fa fa-angle-double-left" aria-hidden="true"></i>
				</button>

				<button 
					className="table__button_back"
					onClick = {prev}
					disabled = {pageNumber === 1}
				>
					<i className="fa fa-angle-left" aria-hidden="true"></i>
				</button>

				<button 
					className="table__button-forward"
					onClick = {next}
					disabled = {pageNumber === pageCount}
				>
					<i className="fa fa-angle-right" aria-hidden="true"></i>
				</button>

				<button 
					className="table__button-to-end"
					onClick = {toEnd}
					disabled = {pageNumber === pageCount}
				>
					<i className="fa fa-angle-double-right" aria-hidden="true"></i>
				</button>

			</th>
		);
	}
}
