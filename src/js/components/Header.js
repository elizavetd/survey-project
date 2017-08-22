import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { store } from '../store'
import { logout } from '../actions/userActions'

const mapStateToProps = (store) => {
	return {
		user: store.user.currentUser
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => store.dispatch(logout())
	};
};

const Head = ({ role, username, handleLogout }) => (
	<div className="head">
		<NavLink className="head__logo" exact to="/"><img src="/img/logo.png" /></NavLink>
		<ul className="head__auth">
			{(role === 'guest') && <li>
				<NavLink className="head__auth_signin" to="/signin">Вход</NavLink>
			</li>}
			{(role === 'guest') && <li>
				<NavLink className="head__auth_signup" to="/signup">Регистрация</NavLink>
			</li>}

			{!(role === 'guest') && 
				<li className="head__auth_hello">Здравствуйте, {username}</li>
			}
			{!(role === 'guest') && 
				<li><button onClick={handleLogout} className="head__auth_logout">Выйти</button></li>
			}
		</ul>
	</div>
);

const Navigation = ({ role }) => (
	<nav className="menu-container" role="dropdown-menu">
		<ul className="menu menu_left">
			<input type="checkbox" id="hamburger-button" />
			<label className="menu__hamburger" htmlFor="hamburger-button"><i className="fa fa-bars" aria-hidden="true"></i></label>
			{!(role === 'guest') && <li>
				<NavLink className="menu__item" to='/my-surveys'>Мои опросы</NavLink>
			</li>}
			{!(role === 'guest') && <li>
				<NavLink className="menu__item" to='/templates'>Шаблоны опросов</NavLink>
			</li>}
			{(role === 'administrator') && <li>
				<NavLink className="menu__item" to='/users'>Пользователи</NavLink>
			</li>}
			<li><NavLink className="menu__item" to='/about'>О компании</NavLink></li>
		</ul>
	</nav>
);

@connect(mapStateToProps, mapDispatchToProps)
export default class Header extends React.Component {
	constructor() {
		super();
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout() {
		this.props.logout();
	}

	render() {
		let { user } = this.props;

		return (
			<header className="header">
				<Head 
					role = {user.role}
					username = {user.username}
					handleLogout = {this.handleLogout}
				/>
				<Navigation role = {user.role} />
			</header>
		);
	};
};
