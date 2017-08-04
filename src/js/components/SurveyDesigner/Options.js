import React from "react"
import { Route, NavLink } from 'react-router-dom'

const Options = ({ position, url }) => (
    <aside>
        { (position === 'left') && 
            <div className="survey-setup survey-setup_left">
		        <NavLink to={`${url}/start-page`}><button className="aside-button" title="Титульная страница опроса"><i className="fa fa-sign-in" aria-hidden="true"></i></button></NavLink>
			    <NavLink to={url}><button className="aside-button" title="Страница 1"><i className="fa fa-calendar-o" aria-hidden="true"></i></button></NavLink>
			    <NavLink to={url}><button className="aside-button" title="Добавить новую страницу"><i className="fa fa-calendar-plus-o" aria-hidden="true"></i></button></NavLink>
			    <NavLink to={`${url}/finish-page`}><button className="aside-button" title="Последняя страница опроса"><i className="fa fa-sign-out" aria-hidden="true"></i></button></NavLink>
            </div>
        }
        { (position === 'right') && 
            <div className="survey-setup survey-setup_right">
				<div className="survey-setup__steps">
					<NavLink to={`${url}/settings`}><button className="aside-button" title="Настройки опроса"><i className="fa fa-cog" aria-hidden="true"></i></button></NavLink>
					<NavLink to={`${url}/collect-answers`}><button className="aside-button" title="Сбор результатов"><i className="fa fa-users" aria-hidden="true"></i></button></NavLink>
					<NavLink to={`${url}/results`}><button className="aside-button" title="Результаты"><i className="fa fa-bar-chart" aria-hidden="true"></i></button></NavLink>
				</div>
				<div className="survey-setup__options">
					<button className="aside-button" title="Сохранить опрос"><i className="fa fa-floppy-o" aria-hidden="true"></i></button>
					<button className="aside-button" title="Сохранить опрос как шаблон"><i className="fa fa-bookmark-o" aria-hidden="true"></i></button>
					<button className="aside-button" title="Удалить страницу"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
					<NavLink to="/my-surveys"><button className="aside-button" title="Отменить создание опроса"><i className="fa fa-undo" aria-hidden="true"></i></button></NavLink>
				</div>
				<input className="survey-setup__open-fullscreen" type="checkbox" id="more-settings-button" />
				<label className="survey-setup__cog" htmlFor="more-settings-button" ><i className="fa fa-cog" aria-hidden="true"></i></label>
				<div className="survey-setup__fullscreen">
					<label htmlFor="more-settings-button" ><i className="fa fa-times" aria-hidden="true"></i></label>
					<div>
						<NavLink to={`${url}/start-page`}><button className="aside-button" title="Титульная страница опроса"><i className="fa fa-sign-in" aria-hidden="true"></i></button></NavLink>
						<NavLink to={url}><button className="aside-button" title="Страница 1"><i className="fa fa-calendar-o" aria-hidden="true"></i></button></NavLink>
						<NavLink to={url}><button className="aside-button" title="Добавить новую страницу"><i className="fa fa-calendar-plus-o" aria-hidden="true"></i></button></NavLink>
						<NavLink to={`${url}/finish-page`}><button className="aside-button" title="Последняя страница опроса"><i className="fa fa-sign-out" aria-hidden="true"></i></button></NavLink>
					</div>
					<div>
						<NavLink to={`${url}/settings`}><button className="aside-button" title="Настройки опроса"><i className="fa fa-cog" aria-hidden="true"></i></button></NavLink>
						<NavLink to={`${url}/collect-answers`}><button className="aside-button" title="Сбор результатов"><i className="fa fa-users" aria-hidden="true"></i></button></NavLink>
						<NavLink to={`${url}/results`}><button className="aside-button" title="Результаты"><i className="fa fa-bar-chart" aria-hidden="true"></i></button></NavLink>
					</div>
					<div>
						<button className="aside-button" title="Сохранить опрос"><i className="fa fa-floppy-o" aria-hidden="true"></i></button>
						<button className="aside-button" title="Сохранить опрос как шаблон"><i className="fa fa-bookmark-o" aria-hidden="true"></i></button>
						<button className="aside-button" title="Удалить страницу"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
						<NavLink to="/my-surveys"><button className="aside-button" title="Отменить создание опроса"><i className="fa fa-undo" aria-hidden="true"></i></button></NavLink>
					</div>
				</div>
			</div>
            }

			<Route path={`${url}/start-page`} render={() => (<h1>start</h1>)}/>
			<Route path={`${url}/finish-page`} render={() => (<h1>finish</h1>)}/>
			<Route path={`${url}/settings`} render={() => (<h1>settings</h1>)}/>
			<Route path={`${url}/collect-answers`} render={() => (<h1>collect-answers</h1>)}/>
			<Route path={`${url}/results`} render={() => (<h1>results</h1>)}/>
			
    		{/* <Route exact path={url} render={() => (
      			<h1>Please select a topic.</h1>
    		)}/> */}
    </aside>
);

export default Options;
