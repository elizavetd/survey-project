import React from 'react'
import { connect } from 'react-redux'
import { Route, NavLink, Redirect } from 'react-router'
import { createBrowserHistory } from 'history'
import { ConnectedRouter, push } from 'react-router-redux'

import { history } from '../store'

import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage/HomePage'
import MySurveysPage from './MySurveysPage/MySurveysPage'
import TemplatesPage from './TemplatesPage/TemplatesPage'
import UsersPage from './UsersPage/UsersPage'
import AboutPage from './AboutPage/AboutPage'
import SigninForm from './Authentification/SigninForm'
import SignupForm from './Authentification/SignupForm'
import ForgotPassword from './Authentification/ForgotPassword'
import SurveyDesigner from './SurveyDesigner/SurveyDesigner'

import SurveyPageEditor from './SurveyDesigner/Pages/SurveyPageEditor'
import StartPage from './SurveyDesigner/Pages/StartPage'
import FinishPage from './SurveyDesigner/Pages/FinishPage'
import SettingsPage from './SurveyDesigner/Pages/SettingsPage'
import CollectPage from './SurveyDesigner/Pages/CollectPage'
import ResultsPage from './SurveyDesigner/Pages/ResultsPage'
import UserResultsPage from './SurveyDesigner/Pages/UserResultsPage'
import Options from './SurveyDesigner/Options'

@connect((store) => {
	return {
		role: store.user.currentUser.role
	};
})

export default class Layout extends React.Component {
	render() {
		const { role, match } = this.props;

		return (
			<ConnectedRouter history={history}>
				<div>
					<Header />
					
					<Route exact path="/" component={ HomePage } />
					<Route path="/my-surveys" render={() => (
						(role !== 'guest') 
							? (<MySurveysPage />)
							: (<Redirect to="/signin"/>) 
					)}/>
					<Route path="/templates" render={() => (
						(role === 'guest') 
							? (<Redirect to="/signin"/>) 
							: (<TemplatesPage />)
					)}/>
					<Route path="/users" render={() => (
						(role !== 'administrator') 
							? (<Redirect to="/signin"/>) 
							: (<UsersPage />)
					)}/>
					<Route path="/about" component={ AboutPage } />
					<Route path="/signin" render={() => (
						(role !== 'guest') 
							? (<Redirect to="/my-surveys"/>) 
							: (<SigninForm />)
					)}/>
					<Route path="/signup" render={() => (
						(role !== 'guest') 
							? (<Redirect to="/my-surveys"/>) 
							: (<SignupForm />)
					)}/>
					<Route path="/forgot-password" component={ ForgotPassword } />
					<Route path="/new-survey" component={SurveyDesigner} />
					{(role === 'guest') && <Redirect from='/new-survey' to='/signin'/>}
					
					<Route path={`/survey_:id`} render={() => (
							<div className="content">
								<div className="survey-editing">
									<Route path={`/survey_:id/collect-answers`} component={ CollectPage } />
									<Route exact path={`/survey_:id/results`} component={ ResultsPage } />
									<Route path={`/survey_:id/results/:user`} component={ UserResultsPage } />
									<Route exact path={`/survey_:id`} component={ Survey } /> 
								</div>
							</div>
						)}
					/>

					<Route path={`/template_:id`} render={() => (
							<div className="content">
								<div className="survey-editing">
									<Route path={`/template_:id/edit`} component={ SurveyPageEditor } />		
									<Options position='template'/>
								</div>
							</div>
						)}
					/>

					<Footer />
				</div>
			</ConnectedRouter>
		);
	}
}

const Survey = () => (
	<h1>Здесь будет прохождение опроса</h1>
);