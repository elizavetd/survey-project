import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../store'
import { getUserList } from '../../reducers/userReducer'

import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableFooter from './TableFooter'

@connect((store) => {
	return {
		users: store.user.userList
	};
})
export default class UsersPage extends React.Component {
	constructor() {
		super();
		this.state = {}
		this.filter = this.filter.bind(this);
	}

	filter(e) {
		this.setState({filter: e.target.value});
	}
	
	componentWillMount() {
		getUserList();
	}

	render() {
		let { users } = this.props;

		if(this.state.filter) {
			users = users.filter(
				user => user.username.toLowerCase()
							.includes(this.state.filter.toLowerCase()));
		}

		return (
			<div className="content">
				<section className="users">
					<table className="table">
						<TableHeader onChange={this.filter} />
						<tbody>
							{users && users.map(user =>
								<TableRow
									key = {user.id}
									username = {user.username}
									role = {user.role}
									signupDate = {user.signupDate}
									surveysCount = {user.surveysCount}
								/>
							)}
						</tbody>
						<TableFooter userCount={112} />
					</table>
				</section>
			</div>
		);
	}
}
