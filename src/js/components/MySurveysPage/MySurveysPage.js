import React from 'react'
import { connect } from 'react-redux'
import { getSurveys } from '../../reducers/surveyReducer'

import SearchBar from '../SearchBar'
import PaginationBar from '../PaginationBar'
import SurveyItem from './SurveyItem'

@connect((store) => {
	return {
		surveys: store.surveys.userSurveys
	};
})
class MySurveysPage extends React.Component {
	constructor() {
		super();
		this.state = {}
		this.filter = this.filter.bind(this);
	}
	
	componentWillMount() {
		getSurveys();
	}

	filter(e) {
		this.setState({filter: e.target.value});
	}

	render() {
		let { surveys } = this.props;

		if(this.state.filter) {
			surveys = surveys.filter(
				survey => survey.title.toLowerCase()
							.includes(this.state.filter.toLowerCase()));
		}

		let itemCountCaption = "Всего опросов:";
		let itemCount = 37;
		let itemsPerPage = 5;
		let pageCount = Math.ceil(itemCount / itemsPerPage);
		let pageNumber = 1;
		let hasSideInfo = true;

	return (
		<div className="content">
		<section className="my-surveys">
			<SearchBar 
				onChange = {this.filter}
				placeholder="Найти опрос" 
				link="/new-survey"
				caption="Новый опрос"
			/>
			 {console.log(surveys)} 
			<PaginationBar 
				hasSideInfo = {hasSideInfo}
				itemCountCaption = {itemCountCaption}
				itemCount = {itemCount}
				pageNumber = {pageNumber}
				pageCount = {pageCount}
			/>
			<div className="surveys-list">
				{surveys && surveys.map(survey =>
					<SurveyItem 
						key = {survey.id}
						imageSrc = {survey.imageSrc}
						iconType = {survey.iconType}
						title = {survey.title}
						description = {survey.description}
						answersCount = {survey.answersCount}
						lastChangeDate = {survey.lastChangeDate}
					/>
				)}
			</div>
			<PaginationBar hasSideInfo = {!hasSideInfo} />
		</section>
	</div>
	);
  }
}

export default MySurveysPage;
