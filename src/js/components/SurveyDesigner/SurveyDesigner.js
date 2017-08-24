import React from 'react'
import { Route } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { store } from '../../store'
// import { resetSurvey } from '../../actions/questionActions'

import Options from './Options'

import SurveyPageEditor from './Pages/SurveyPageEditor'
import StartPage from './Pages/StartPage'
import FinishPage from './Pages/FinishPage'
import SettingsPage from './Pages/SettingsPage'
import CollectPage from './Pages/CollectPage'
import ResultsPage from './Pages/ResultsPage'
import UserResultsPage from './Pages/UserResultsPage'


// const mapStateToProps = (store) => {
// 	return {
// 		message: store.currentSurvey.finishMessage
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		resetSurvey: () => dispatch(editMessage())
// 	}
// };

//@connect(mapDispatchToProps)
export default class SurveysDesigner extends React.Component{
	constructor() {
		super();

		this.state = {
			//save: false
		}

		//this.saveSurvey = this.saveSurvey.bind(this);
	}

	// saveSurvey() {
	// 	alert('save')
	// }

	render() {
		const { match } = this.props;

		//console.log(this.props)

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
						//saveSurvey={this.saveSurvey} 
					/>
				</div>
			</div>
		);
	};
};