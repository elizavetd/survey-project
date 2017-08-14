import React from "react"

class JobItem extends React.Component {
	constructor() {
		super();
		this.state = {
			clicked: false,
			buttonClass: 'fa fa-chevron-down',
			requirementClass: 'jobs-list__requirements'
		}
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(e) {
		if (this.state.clicked) {
			this.setState({
				clicked: false,
				buttonClass: 'fa fa-chevron-down',
				requirementClass: 'jobs-list__requirements'
			});
		} else {
			this.setState({
				clicked: true,
				buttonClass: 'fa fa-chevron-up',
				requirementClass: 'jobs-list__requirements jobs-list__requirements_displayed'
			});
		}
	}

    render() {
		const { jobName, requirements} = this.props;

		return (
			<div className="job-list__item">
				<div className="jobs-list__job">
					<h3 className="jobs-list__job-name">{jobName}</h3>
					<button onClick={this.handleClick} className="jobs-list__button"><i className={this.state.buttonClass} aria-hidden="true"></i></button>
				</div>
				<div className={this.state.requirementClass} >
					<p>Requirements</p>
					<ul className="regular-list">
						{requirements.map(requirement => 
							<li 
								key = {requirement.length * requirement.charCodeAt(Math.floor(requirement.length/2))}>
								{requirement}
							</li>
						)}
					</ul>
				</div>
			</div>
		);
	};
};

export default JobItem;
