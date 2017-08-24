import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../store'
import { getUserSurveys } from '../../actions/userSurveysActions'

import SearchBar from '../SearchBar'
import PaginationBar from '../PaginationBar'
import SurveyItem from './SurveyItem'

const mapDispatchToProps = (dispatch) => {
	return {
		getUserSurveys: (id) => store.dispatch(getUserSurveys(id))
	};
};

const mapStateToProps = (store) => {
	return {
		surveys: store.surveys.surveyList,
		user: store.user.currentUser
	};
};

@connect(mapStateToProps, mapDispatchToProps)
class MySurveysPage extends React.Component {
	constructor() {
		super();
		this.state = {
			currentId: undefined
		}
		this.filter = this.filter.bind(this);
	}
	
	componentWillMount() {
		this.props.getUserSurveys(this.props.user.id)
	}

	filter(e) {
		this.setState({filter: e.target.value});
	}

	render() {
		let { surveys, user } = this.props;

		if(this.state.filter) {
			surveys = surveys.filter(
				survey => survey.title.toLowerCase()
							.includes(this.state.filter.toLowerCase()));
		}

		let itemCountCaption = "Всего опросов:";
		let itemCount = 0;
		if (surveys) 
			itemCount = surveys.length;
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
			
					{(surveys && surveys.length > 0) && <PaginationBar 
						hasSideInfo = {hasSideInfo}
						itemCountCaption = {itemCountCaption}
						itemCount = {itemCount}
						pageNumber = {pageNumber}
						pageCount = {pageCount}
					/>}

					<div className="surveys-list">
						{surveys && surveys.map(survey =>
							<SurveyItem 
								key = {survey.id}
								id = {survey.id}
								imageSrc = {survey.imageSrc}
								iconType = {survey.iconType}
								title = {survey.title}
								description = {survey.description}
								answersCount = {survey.answersCount}
								lastChangeDate = {survey.lastChangeDate}
							/>
						)}

						{(surveys && surveys.length === 0) && 
							<p className="surveys-list__no-surveys">Вы еще не создали ни одного опроса.</p>
						}
					</div>

					{(surveys && surveys.length > 0) && <PaginationBar hasSideInfo = {!hasSideInfo} />}
				</section>
			</div>
		);
	};
};

export default MySurveysPage;
