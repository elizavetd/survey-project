import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../../store'
import { getJobs } from '../../../actions/jobActions'

import JobItem from './JobItem'

const mapDispatchToProps = (dispatch) => {
	return {
		getJobList: () => store.dispatch(getJobs())
	};
};

const mapStateToProps = (store) => {
	return {
		jobs: store.jobList
	};
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Jobs extends React.Component {
	componentWillMount() {
		this.props.getJobList();
	}

	render() {
		const { jobs } = this.props;

		return (
			<article className="about-us__article about-us__article_white">
				{console.log(jobs)}
				<h2 className="about-us__heading">Вакансии</h2>
				<div className="jobs-list">
					{jobs && jobs.map(job => 
						<JobItem
							key = {job.id}
							jobName = {job.vacancy}
							requirements = {job.requirements}
						/>
					)}
				</div>
			</article>
		);
	}
}
