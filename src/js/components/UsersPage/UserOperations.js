import React from 'react'

export default class UserOperations extends React.Component {
	render() {
		return (
			<td data-th="" className="user-operations">
				<button className="user__button-edit"><i className="fa fa-pencil" aria-hidden="true"></i></button>
				<button className="user__button-delete"><i className="fa fa-trash" aria-hidden="true"></i></button>
				<button className="user__button-options"><i className="fa fa-caret-down" aria-hidden="true"></i></button>
			</td>
		);
	}
}
