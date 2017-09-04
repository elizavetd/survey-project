import React from 'react'
import { NavLink } from 'react-router-dom'

const TableRow = ({ index, user, answer }) => (
	<tr>
		<td className="table__number-column">{index}</td>
		<td className="table__user-column">
			<NavLink to={`results/${user}`}>{user}</NavLink>
		</td>
		<td className="table__answer-column">{answer}</td>
	</tr>
);

export default class ResultTable extends React.Component {
	constructor() {
		super();

		this.state = {
			sortButton: "down"
		}

		this.filter = this.filter.bind(this);
		this.sort = this.sort.bind(this);
	}

	filter(e) {
		this.setState({filter: e.target.value});
	}

	sort(e) {
		if(this.state.sortButton === "down") {
			this.props.results.sort((a, b) => {
				if (a.user.toLowerCase() > b.user.toLowerCase()) {
					return 1;
				}
				if (a.user.toLowerCase() < b.user.toLowerCase()) {
					return -1;
				}
				return 0;
			});

			this.setState({sortButton: "up"});

		} else if (this.state.sortButton === "up") {
			this.props.results.sort((a, b) => {
				if (a.user.toLowerCase() > b.user.toLowerCase()) {
					return -1;
				}
				if (a.user.toLowerCase() < b.user.toLowerCase()) {
					return 1;
				}
				return 0;
			});
			
			this.setState({sortButton: "down"});
		};
	}

	render() {
		let { results } = this.props;

		if(this.state.filter) {
			results = results.filter(
				result => result.user.toLowerCase()
							.includes(this.state.filter.toLowerCase()));
		}

		return (
			<div className="survey-results__table">
				<table className="table">
					<thead className="table__header">
						<tr className="table__search-row">
							<th><input onChange={this.filter} colSpan="3" className="survey-results__table-search" type="search" placeholder={'Найти пользователя'} /></th>
						</tr>
						<tr>
							<th className="table__number-column"></th>
							<th className="table__user-column">
								Респондент
								<button	onClick = {this.sort}>
									<div className={
										(this.state.sortButton === "down" && "triangle-down") ||
										(this.state.sortButton === "up" && "triangle-up")
									}/>
								</button>
							</th>
							<th className="table__answer-column">Ответ</th>
						</tr>
					</thead>
		
					<tbody>
						{results.map((result, i) =>
							<TableRow 
								key = {`${i+1}_${result.user}__${result.answer}`}
								index = {i+1}
								user = {result.user}
								answer = {result.answer}
							/>
						)}
					</tbody>
				</table>
			</div>
		);
	};
};
