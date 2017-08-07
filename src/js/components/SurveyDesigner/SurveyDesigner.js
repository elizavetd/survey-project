import React from 'react'
import { Route } from 'react-router-dom'

import Options from './Options'

import SurveyPageEditor from './Pages/SurveyPageEditor'
import StartPage from './Pages/StartPage'
import FinishPage from './Pages/FinishPage'
import SettingsPage from './Pages/SettingsPage'
import CollectPage from './Pages/CollectPage'
import ResultsPage from './Pages/ResultsPage'
import UserResultsPage from './Pages/UserResultsPage'

const SurveysDesigner = ({ match }) => (
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

            <Options position='right' url={match.url} />
		</div>
	</div>
)

export default SurveysDesigner;
