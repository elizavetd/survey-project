import React from "react"
import PropTypes from 'prop-types';

const PaginationBar = ({ 
    hasSideInfo,
    itemCountCaption, 
    itemCount, 
    pageNumber,
    pageCount
}) => (
    <div className="pagination">
        {hasSideInfo &&
		    <div className="pagination__details">
			    <h4>{itemCountCaption}</h4>
			    <p className="pagination__item-count">{itemCount}</p>
		    </div>
        }
		<div className="pagination__nav-buttons">
			<button className="pagination__button" title="В начало списка"><i className="fa fa-backward" aria-hidden="true"></i></button>
			<button className="pagination__button" title="Предыдущая страница"><i className="fa fa-caret-left" aria-hidden="true"></i></button>
			<button className="pagination__button" title="Следующая страница"><i className="fa fa-caret-right" aria-hidden="true"></i></button>
			<button className="pagination__button" title="В конец списка"><i className="fa fa-forward" aria-hidden="true"></i></button>
		</div>
        {hasSideInfo &&
		    <div className="pagination__details">
			    <h4>Страница</h4>
			    <p className="pagination__page-count">{pageNumber}/{pageCount}</p>
		    </div>
        }
	</div>
);

PaginationBar.propTypes = {
  hasSideInfo: PropTypes.bool.isRequired,
  itemCountCaption: PropTypes.string, 
  itemCount: PropTypes.number, 
  pageNumber: PropTypes.number,
  pageCount: PropTypes.number
}

export default PaginationBar;
