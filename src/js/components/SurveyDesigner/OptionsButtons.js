import React from "react"
import { NavLink } from 'react-router-dom'

export const PageNavButtons = ({ type, url }) => (
	<div className={type}>
		<NavLink to={`${url}/start-page`}><button className="aside-button" title="Титульная страница опроса"><i className="fa fa-sign-in" aria-hidden="true"></i></button></NavLink>
		<NavLink to={url}><button className="aside-button" title="Страница 1"><i className="fa fa-calendar-o" aria-hidden="true"></i></button></NavLink>
		<NavLink to={url}><button className="aside-button" title="Добавить новую страницу"><i className="fa fa-calendar-plus-o" aria-hidden="true"></i></button></NavLink>
		<NavLink to={`${url}/finish-page`}><button className="aside-button" title="Последняя страница опроса"><i className="fa fa-sign-out" aria-hidden="true"></i></button></NavLink>
	</div>
);

export const StepButtons = ({ type, url }) => (
	<div className={type}>
		<NavLink to={`${url}/settings`}><button className="aside-button" title="Настройки опроса"><i className="fa fa-cog" aria-hidden="true"></i></button></NavLink>
		<NavLink to={`${url}/collect-answers`}><button className="aside-button" title="Сбор результатов"><i className="fa fa-users" aria-hidden="true"></i></button></NavLink>
		<NavLink to={`${url}/results`}><button className="aside-button" title="Результаты"><i className="fa fa-bar-chart" aria-hidden="true"></i></button></NavLink>
	</div>
);

export const OptionButtons = ({ type }) => (
	<div className={type}>
		<button className="aside-button" title="Сохранить опрос"><i className="fa fa-floppy-o" aria-hidden="true"></i></button>
		<button className="aside-button" title="Сохранить опрос как шаблон"><i className="fa fa-bookmark-o" aria-hidden="true"></i></button>
		<button className="aside-button" title="Удалить страницу"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
		<NavLink to="/my-surveys"><button className="aside-button" title="Отменить создание опроса"><i className="fa fa-undo" aria-hidden="true"></i></button></NavLink>
	</div>
);