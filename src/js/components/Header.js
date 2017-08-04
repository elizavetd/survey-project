import React from 'react'
import { NavLink } from 'react-router-dom'

const Head = () => (
    <div className="head">
		<NavLink className="head__logo" exact to="/"><img src="./img/logo.png" /></NavLink>
		<ul className="head__auth">
			<li><NavLink className="head__auth_signin" to="/signin">Вход</NavLink></li>
			<li><NavLink className="head__auth_signup" to="/signup">Регистрация</NavLink></li>
		</ul>
	</div>
);

const Navigation = () => (
  <nav className="menu-container" role="dropdown-menu">
    <ul className="menu menu_left">
        <input type="checkbox" id="hamburger-button" />
        <label className="menu__hamburger" htmlFor="hamburger-button" /*onClick*/><i className="fa fa-bars" aria-hidden="true"></i></label>
        <li><NavLink className="menu__item" to='/my-surveys'>Мои опросы</NavLink></li>
        <li><NavLink className="menu__item" to='/templates'>Шаблоны опросов</NavLink></li>
        <li><NavLink className="menu__item" to='/users'>Пользователи</NavLink></li>
        <li><NavLink className="menu__item" to='/about'>О компании</NavLink></li>
    </ul>
  </nav>
);

export default class Header extends React.Component {

  render() {
    return (
      <header className="header">
		    <Head />
        <Navigation />
	    </header>
    );
  };
};
