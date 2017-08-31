import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../store'
import { getUserList } from '../../actions/userActions'

import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableFooter from './TableFooter'

const mapStateToProps = (store) => {
	return {
		users: store.user.userList
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getUserList: () => store.dispatch(getUserList())
	};
};

@connect(mapStateToProps, mapDispatchToProps)
export default class UsersPage extends React.Component {
	constructor() {
		super();
		this.state = {
			page: 1,
			sortButton: "down"
		}

		this.filter = this.filter.bind(this);
		this.sortUsers = this.sortUsers.bind(this);

		this.showFirstPage = this.showFirstPage.bind(this);
		this.showPreviousPage = this.showPreviousPage.bind(this);
		this.showNextPage = this.showNextPage.bind(this);
		this.showLastPage = this.showLastPage.bind(this);
	}

	componentWillMount() {
		this.props.getUserList();
	}

	filter(e) {
		this.setState({filter: e.target.value});
	}

	sortUsers(e) {
		if(this.state.sortButton === "down") {
			this.props.users.sort((a, b) => {
				if (a.username.toLowerCase() > b.username.toLowerCase()) {
					return 1;
				}
				if (a.username.toLowerCase() < b.username.toLowerCase()) {
					return -1;
				}
				return 0;
			});

			this.setState({sortButton: "up"});

		} else if (this.state.sortButton === "up") {
			this.props.users.sort((a, b) => {
				if (a.username.toLowerCase() > b.username.toLowerCase()) {
					return -1;
				}
				if (a.username.toLowerCase() < b.username.toLowerCase()) {
					return 1;
				}
				return 0;
			});
			
			this.setState({sortButton: "down"});
		};
	}

	showFirstPage() {
		this.setState({
			page: 1
		})
	}

	showPreviousPage() {
		this.setState({
			page: --this.state.page
		})
	}

	showNextPage() {
		this.setState({
			page: ++this.state.page
		})
	}

	showLastPage() {
		this.setState({
			page: Math.ceil(this.props.users.length / 10)
		})
	}

	render() {
		let { users } = this.props;

		if(this.state.filter) {
			users = users.filter(
				user => user.username.toLowerCase()
							.includes(this.state.filter.toLowerCase()));
		}

		let itemCount = 0;
		let itemsPerPage = 12;
		let pageCount;
		let pageNumber = this.state.page;
		let usersOnPage;

		if (users) {
			itemCount = users.length;

			usersOnPage = users.filter((elem, index) =>
				(index >= ((this.state.page - 1) * itemsPerPage)) && 
				(index < ((this.state.page - 1) * itemsPerPage + itemsPerPage))
			);

			pageCount = Math.ceil(itemCount / itemsPerPage);
		};

		return (
			<div className="content">
				<section className="users">
					<table className="table">
						<TableHeader
							onChange = {this.filter}
							sortUsers = {this.sortUsers}
							buttonClass = {this.state.sortButton}
						/>
						<tbody>
							{users && usersOnPage.map(user =>
								<TableRow
									key = {user.id}
									id = {user.id}
									username = {user.username}
									role = {user.role}
									signupDate = {user.signupDate}
									surveysCount = {user.surveys}
								/>
							)}
						</tbody>
						<TableFooter 
							userCount={itemCount} 
							pageNumber={pageNumber}
							pageCount={pageCount}
							toStart = {this.showFirstPage}
							prev = {this.showPreviousPage}
							next = {this.showNextPage}
							toEnd = {this.showLastPage}
						/>
					</table>
				</section>
			</div>
		);
	}
}
