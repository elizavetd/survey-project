import React from "react"
import PropTypes from 'prop-types';

class PaginationBar extends React.Component {
	render() {
		let { hasSideInfo,
			  hasPadding,
			  itemCountCaption, 
			  itemCount, 
			  pageNumber,
			  pageCount, 
			  toStart, 
			  prev, 
			  next, 
			  toEnd	} = this.props;

		return (
			<div className={ hasPadding && "pagination" || "pagination pagination_no-padding" }>
				{hasSideInfo &&
					<div className="pagination__details">
						<h4>{itemCountCaption}</h4>
						<p className="pagination__item-count">{itemCount}</p>
					</div>
				}
				<div className="pagination__nav-buttons">

					<button 
						onClick = {toStart}
						className="pagination__button" 
						title="В начало списка"
						disabled = {pageNumber === 1}
					>
						<i className="fa fa-backward" aria-hidden="true"></i>
					</button>

					<button 
						onClick = {prev}
						className="pagination__button" 
						title="Предыдущая страница"
						disabled = {pageNumber === 1}
					>
						<i className="fa fa-caret-left"aria-hidden="true"></i>
					</button>

					<button 
						onClick = {next}
						className="pagination__button" 
						title="Следующая страница"
						disabled = {pageNumber === pageCount}
					>
						<i className="fa fa-caret-right" aria-hidden="true"></i>
					</button>

					<button 
						onClick = {toEnd}
						className="pagination__button" 
						title="В конец списка"
						disabled = {pageNumber === pageCount}
					>
						<i className="fa fa-forward" aria-hidden="true"></i>
					</button>

				</div>
				{hasSideInfo &&
					<div className="pagination__details">
						<h4>Страница</h4>
						<p className="pagination__page-count">{pageNumber}/{pageCount}</p>
					</div>
				}
			</div>
		);
	};
};

PaginationBar.propTypes = {
	hasSideInfo: PropTypes.bool.isRequired,
	itemCountCaption: PropTypes.string, 
	itemCount: PropTypes.number, 
	pageNumber: PropTypes.number,
	pageCount: PropTypes.number
}

PaginationBar.defaultProps = {
	hasPadding: true
}

export default PaginationBar;
