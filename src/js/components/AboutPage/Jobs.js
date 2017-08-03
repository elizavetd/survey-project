import React from 'react'

import JobItem from './JobItem'

export default class Jobs extends React.Component {
  render() {
    return (
        <article className="about-us__article about-us__article_white">
			<h2 className="about-us__heading">Вакансии</h2>
			<div className="jobs-list">
                <JobItem
                    jobName = "PHP TEAM LEAD"
                    requirments = {[
                        "3+ years of professional experience in software design & development of complex systems with demonstrated experience with PHP frameworks, preferably with Yii, Symphony",
                        "Minimum 1 year of management experience",
                        "Computer science fundamentals (data structures, algorithms, and programming languages)",
                        "English language skills at the level of correspondence and communication with the customer",
                        "Experience with LAMP stack technologies",
                        "Excellent communication and collaboration skills"
                    ]}
                />
                <JobItem
                    jobName = "PYTHON SENIOR SOFTWARE DEVELOPER"
                    requirments = {[
                        "At least 3 years of experience as a software developer",
                        "Good knowledge of Python programming language",
                        "Excellent knowledge with Django web framework",
                        "Experience with Tornado web framework is a plus",
                        "Excellent understanding of web-oriented and database technologies",
                        "Familiarity with REST services & SOAP services is expected",
                        "Experience with front-end MVC frameworks (AnglularJS, Backbone) is a plus",
                        "Experience with NoSQL solutions (MongoDB, Redis, Cassandra) is a plus",
                        "AWS field is a plus",
                        "Systematic and structured approach to problem solving",
                        "Formulates new and alternate ideas, approaches, and designs",
                        "Ability to communicate effectively in English (written and spoken)"
                    ]}
                />
                <JobItem
                    jobName = "SENIOR / TEAM LEAD FRONT-END DEVELOPER"
                    requirments = {[
                        "3+ years of professional experience in front-end development",
                        "Ability to communicate effectively in written and spoken English (candidates pass an interview with the customer)",
                        "Strong knowledge of JavaScript (closures, prototypes, inheritance, etc)",
                        "Experience with JavaScript frameworks, such as Knockout.js, Backbone.js",
                        "Experience in team coordination, or a strong desire to become a team lead",
                        "Experience in developing websites for mobile devices will be an advantage"
                    ]}
                />
                <JobItem
                    jobName = "RUBY TEAM LEAD"
                    requirments = {[
                        "Minimum 4 years web experience",
                        "Minimum 2 years Ruby on Rails experience",
                        "Minimum 1 year management experience",
                        "Solid knowledge and experience in o Ruby and Ruby frameworks",
                        "RDBMS like MySQL; PostgreSQL, HTML/CSS/Bootstrap, JS/jQuery/Backbone",
                        "CoffeeScript, HAML and SASS",
                        "Experience with various Rails test frameworks (RSpec, Cucumber)"
                    ]}
                />
                <JobItem
                    jobName = "SENIOR QA ENGINEER"
                    requirments = {[
                        "3 + years’ experience in QA domain",
                        "Experience of installing web applications on Windows and Unix platforms",
                        "Good knowledge of SQL and RDBMS",
                        "Experience in testing API and web-services",
                        "Ability to make reliable estimations",
                        "Good skills in performance/load/stress testing",
                        "Ability to write test documentation",
                        "Intermediate level of English",
                        "Experience in automation testing is a plus"
                    ]}
                />
                <JobItem
                    jobName = "QA ENGINEER"
                    requirments = {[
                        "1+ year of relevant experience working as a software testing engineer",
                        "Understanding of operating systems, browsers and software compatibility",
                        "Strong troubleshooting skills",
                        "Experience in test cases authoring and bug reports creation",
                        "Proficiency in test case and defect tracking tools usage",
                        "Good communication skills, including acceptable spoken and written English (Intermediate level)",
                        "Good time management skills",
                        "The ability to work in a team and as an individual",
                        "Natural curiosity"
                    ]}
                />
			</div>
		</article>
    );
  }
}
