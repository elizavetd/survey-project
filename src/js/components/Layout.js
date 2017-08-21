import React from 'react'
import { connect } from 'react-redux'
import { Route, NavLink } from 'react-router'
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

@connect((store) => {
	return {
		username: store.user.username
	};
})

export default class Layout extends React.Component {
	render() {
		const { username } = this.props;

		return (
			<ConnectedRouter history={history}>
				<div>
					<Header />
					
					<Route exact path="/" component={ HomePage } />
					<Route path="/my-surveys" component={ MySurveysPage } />
					<Route path="/templates" component={ TemplatesPage } />
					<Route path="/users" component={ UsersPage } />
					<Route path="/about" component={ AboutPage } />
					<Route path="/signin" component={ SigninForm } />
					<Route path="/signup" component={ SignupForm } />
					<Route path="/forgot-password" component={ ForgotPassword } />
					<Route path="/new-survey" component={ SurveyDesigner } />
					
					<Footer />
				</div>
			</ConnectedRouter>
		);
	}
}