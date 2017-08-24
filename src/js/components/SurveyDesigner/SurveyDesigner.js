import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { store } from '../../store'
import { resetSurvey, requestSurveySaving } from '../../actions/questionActions'

import Options from './Options'

import SurveyPageEditor from './Pages/SurveyPageEditor'
import StartPage from './Pages/StartPage'
import FinishPage from './Pages/FinishPage'
import SettingsPage from './Pages/SettingsPage'
import CollectPage from './Pages/CollectPage'
import ResultsPage from './Pages/ResultsPage'
import UserResultsPage from './Pages/UserResultsPage'


const mapStateToProps = (store) => {
	return {
		currentSurvey: store.currentSurvey,
		currentUser: store.user.currentUser
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		resetSurvey: () => store.dispatch(resetSurvey()),
		requestSurveySaving: (survey) => store.dispatch(requestSurveySaving(survey))
	}
};

@connect(mapStateToProps, mapDispatchToProps)
export default class SurveysDesigner extends React.Component{
	constructor() {
		super();
		
	}


	componentWillUnmount() {
		let saveChanges = confirm('Сохранить сделанные Вами изменения как новый опрос?')
		
		if(saveChanges) {
			const d = new Date();
			const surveyToSave = Object.assign(
				this.props.currentSurvey, 
				{
					creator: this.props.currentUser.id,
					answersCount: 0,
					lastChangeDate: `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`
				}
			);
			this.props.requestSurveySaving(surveyToSave);
		};

		this.props.resetSurvey();
	}

	render() {
		const { match, currentUser, currentSurvey } = this.props;

		return (
			<div className="content">
				<div className="survey-editing">
					<Options position='left' url={match.url} />
		
					<Route path={`${match.url}/start-page`} component={ StartPage } />
					<Route path={`${match.url}/finish-page`} component={ FinishPage } />
					<Route path={`${match.url}/settings`} component={ SettingsPage } />
					<Route path={`${match.url}/collect-answers`} component={ CollectPage } />
					<Route exact path={`${match.url}/results`} component={ ResultsPage } />
					<Route path={`${match.url}/results/*`} component={ UserResultsPage } />
					<Route exact path={match.url} component={ SurveyPageEditor } /> 
		
					<Options 
						position='right' 
						url={match.url} 
						//surveySaved={this.state.surveySaved}
					/>
				</div>
			</div>
		);
	};
};