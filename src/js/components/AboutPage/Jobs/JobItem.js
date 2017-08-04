import React from "react"

const JobItem = ({
    jobName,
    requirments 
}) => (
    <div className="job-list__item">
		<div className="jobs-list__job">
			<h3 className="jobs-list__job-name">{jobName}</h3>
			<i className="fa fa-chevron-down" aria-hidden="true"></i>
		</div>
		<div className="jobs-list__requirements jobs-list__requirements_displayed" >
			<p>Requirements</p>
			<ul className="regular-list">
				{requirments.map(requirment => 
                    <li 
                        key={requirment.length * requirment.charCodeAt(Math.floor(requirment.length/2))}>
                        {requirment}
                    </li>
                )}
			</ul>
		</div>
	</div>
);

export default JobItem;
