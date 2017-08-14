import React from 'react'
import { connect } from 'react-redux'
import { getJobList } from '../../../reducers/jobReducer'

import JobItem from './JobItem'

@connect((store) => {
    return {
        jobs: store.jobList
    };
})
export default class Jobs extends React.Component {
    componentWillMount() {
        getJobList();
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
