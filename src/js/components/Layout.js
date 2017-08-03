import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage/HomePage'
import MySurveysPage from './MySurveysPage/MySurveysPage'
import TemplatesPage from './TemplatesPage/TemplatesPage'
import UsersPage from './UsersPage/UsersPage'
import SigninForm from './Authentification/SigninForm'
import SignupForm from './Authentification/SignupForm'

@connect((store) => {
  return {
    username: store.myReducer.user.username
  };
})

export default class Layout extends React.Component {

  render() {
    const { username } = this.props;

    return (
      <Router>
      <div>
        <Header />
          <Route exact path="/" component={ HomePage } />
          <Route path="/my-surveys" component={ MySurveysPage } />
          <Route path="/templates" component={ TemplatesPage } />
          <Route path="/users" component={ UsersPage } />
          <Route path="/about" render={() => <h1>about</h1>} />
          <Route path="/signin" component={ SigninForm } />
          <Route path="/signup" component={ SignupForm } />
        <Footer />
      </div>
      </Router>
    );
  }
}