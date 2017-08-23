import React from "react"
import { connect } from 'react-redux'
import { store } from '../../store'
import { requestUserModification } from '../../actions/userActions'

import UserOperations from './UserOperations'

const mapDispatchToProps = (dispatch) => {
	return {
		requestUserModification: (id, newInfo) => 
			store.dispatch(requestUserModification(id, newInfo)
		)
	};
};

const mapStateToProps = (store) => {
	return {
		currentUser: store.user.currentUser
	};
};

@connect(mapStateToProps, mapDispatchToProps)
export default class TableRow extends React.Component {
	constructor() {
		super();

		this.state = {
			isBeingModified: false,
			username: false,
			role: false
		}
		
		this.startModification = this.startModification.bind(this);
		this.changeUsername = this.changeUsername.bind(this);
		this.changeRole = this.changeRole.bind(this);

		this.handleModification = this.handleModification.bind(this);
		this.cancelModification = this.cancelModification.bind(this);
	}

	startModification() {
		this.setState({
			isBeingModified: true
		});
	}

	changeUsername(e) {
		this.setState({
			username: e.target.value
		})
	}

	changeRole(e) {
		this.setState({
			role: e.target.value
		})
	}

	handleModification() {
		const info = {
			username: this.state.username,
			role: this.state.role
		}
		this.props.requestUserModification(this.props.id, info);

		this.setState({
			isBeingModified: false,
			username: false,
			role: false
		});
	}

	cancelModification() {
		this.setState({
			isBeingModified: false,
			username: false,
			role: false
		});
	}

	render() {
		const { username, id, role, signupDate,	surveysCount, currentUser } = this.props;

		if (!this.state.username)
			this.state.username = username;
		if(!this.state.role)
			this.state.role = role;

		return (
			<tr>
				<td data-th="Имя" className="user-name">
					{this.state.isBeingModified 
						? <input onChange={this.changeUsername} className="username-editing" value={this.state.username} />
						: username
					}
				</td>
				<td data-th="Роль" className="user-role">
					{(this.state.isBeingModified && (id !== currentUser.id)) 
						? <select onChange={this.changeRole} className="role-editing" readOnly defaultValue={role}>
							<option defaultValue="administrator">administrator</option>
							<option defaultValue="user">user</option>
						</select>
						: role}
				</td>
				<td data-th="Зарегистрирован" className="user-signup-date">{signupDate}</td>
				<td data-th="Опросы" className="user-surveys">{surveysCount}</td>

				{this.state.isBeingModified 
					? <td data-th="" className="user-operations">
						<button 
							onClick={this.handleModification} 
							className="button-edit"
						>
							<i className="fa fa-check" aria-hidden="true"></i>
						</button>
						<button 
							onClick={this.cancelModification} 
							className="button-cancel"
						>
							<i className="fa fa-times" aria-hidden="true"></i>
						</button>
					  </td>
					: <UserOperations 
						  id = {id} 
						  startModification={this.startModification}
					  />
				}
			</tr>
		);
	};
};