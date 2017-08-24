import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../store'

import { requestUserRemoval } from '../../actions/userActions'

const mapDispatchToProps = (dispatch) => {
	return {
		requestUserRemoval: (id) => store.dispatch(requestUserRemoval(id))
	};
};

const mapStateToProps = (store) => {
	return {
		currentUser: store.user.currentUser
	};
};

@connect(mapStateToProps, mapDispatchToProps)
export default class UserOperations extends React.Component {
	constructor() {
		super();
		
		this.handleRemoval = this.handleRemoval.bind(this);
	}

	handleRemoval() {
		this.props.requestUserRemoval(this.props.id);
	}

	render() {
		const { id, startModification, currentUser } = this.props;

		return (
			<td data-th="" className="user-operations">
				<button 
					className="user__button-edit"
					onClick = {startModification}
				>
					<i className="fa fa-pencil" aria-hidden="true"></i>
				</button>

				<button 
					className="user__button-delete" 
					disabled = {currentUser.id === id}
					onClick = {this.handleRemoval}
				>
					<i className="fa fa-trash" aria-hidden="true"></i>
				</button>

				{/* <button className="user__button-options"><i className="fa fa-caret-down" aria-hidden="true"></i></button> */}
			</td>
		);
	}
}
