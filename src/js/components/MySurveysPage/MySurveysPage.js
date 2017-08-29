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
			page: 1,
			surveyList: undefined
		}

		this.filter = this.filter.bind(this);

		this.showFirstPage = this.showFirstPage.bind(this);
		this.showPreviousPage = this.showPreviousPage.bind(this);
		this.showNextPage = this.showNextPage.bind(this);
		this.showLastPage = this.showLastPage.bind(this);
	}
	
	componentWillMount() {
		this.props.getUserSurveys(this.props.user.id)
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.surveys) {
			this.setState({
				surveyList: nextProps.surveys
			})
		}
	}

	filter(e) {
		this.setState({filter: e.target.value});
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
			page: Math.ceil(this.props.surveys.length / 5)
		})
	}

	render() {
		let { surveys, user } = this.props;

		if (this.state.filter) {
			this.state.page = 1;
			this.state.surveyList = surveys.filter(
				survey => survey.title.toLowerCase()
							.includes(this.state.filter.toLowerCase()));
		} else {
			this.state.surveyList = surveys;
		}

		let itemCountCaption = "Всего опросов:";
		let itemCount = 0;
		let itemsPerPage = 5;
		let pageCount;
		let pageNumber = this.state.page;
		let hasSideInfo = true;
		let surveysOnPage;

		if (surveys) {
			if (this.state.surveyList === undefined) {
				this.state.surveyList = surveys;
			}

			itemCount = this.state.surveyList.length;
			surveysOnPage = this.state.surveyList.filter((elem, index) =>
				(index >= ((this.state.page - 1) * itemsPerPage)) && 
				(index < ((this.state.page - 1) * itemsPerPage + itemsPerPage))
			);
			pageCount = Math.ceil(itemCount / itemsPerPage);
		};
			

		return (
			<div className="content">
				<section className="my-surveys">
					<SearchBar 
						onChange = {this.filter}
						placeholder="Найти опрос" 
						link="/new-survey"
						caption="Новый опрос"
					/>
			
					{(surveys && surveys.length > 0) && 
						<PaginationBar 
							hasSideInfo = {hasSideInfo}
							itemCountCaption = {itemCountCaption}
							itemCount = {itemCount}
							pageNumber = {this.state.page}
							pageCount = {pageCount}
							toStart = {this.showFirstPage}
							prev = {this.showPreviousPage}
							next = {this.showNextPage}
							toEnd = {this.showLastPage}
						/>
					}

					<div className="surveys-list">
						{surveys && surveysOnPage.map(survey =>
							<SurveyItem 
								key = {survey.id}
								id = {survey.id}
								imageSrc = {survey.imageSrc}
								iconType = {survey.iconType}
								title = {survey.title}
								description = {survey.description}
								answersCount = {survey.answersList.length}
								lastChangeDate = {survey.lastChangeDate}
							/>
						)}

						{(surveys && surveys.length === 0) && 
							<p className="surveys-list__no-surveys">Опросов нет.</p>
						}
					</div>

					{(surveys && surveys.length > 0) && 
						<PaginationBar 
							hasSideInfo = {hasSideInfo}
							itemCountCaption = {itemCountCaption}
							itemCount = {itemCount}
							pageNumber = {this.state.page}
							pageCount = {pageCount}
							toStart = {this.showFirstPage}
							prev = {this.showPreviousPage}
							next = {this.showNextPage}
							toEnd = {this.showLastPage}
						/>
					}
				</section>
			</div>
		);
	};
};

export default MySurveysPage;
