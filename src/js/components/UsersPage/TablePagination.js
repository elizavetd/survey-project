import React from 'react'

export default class TablePagination extends React.Component {
  render() {
    return (
        <th className="table__footer-buttons">
			<button className="table__button-to-start"><i className="fa fa-angle-double-left" aria-hidden="true"></i></button>
			<button className="table__button_forward"><i className="fa fa-angle-left" aria-hidden="true"></i></button>
			<button className="table__button-back"><i className="fa fa-angle-right" aria-hidden="true"></i></button>
			<button className="table__button-to-end"><i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
		</th>
    );
  }
}
