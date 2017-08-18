import React from "react"
import { NavLink } from 'react-router-dom'

const SearchBar = ({ onChange, placeholder, link, caption }) => (
	<div className="operations-bar operations-bar_survey-list">
		<i className="fa fa-search" aria-hidden="true"></i>
		<input onChange={onChange} className="search-bar operations-bar__search" type="search" placeholder={placeholder}></input>
		<NavLink to={link}><button className="operations-bar__new-template operations-bar__new-template_right"><i className="fa fa-plus-circle" aria-hidden="true"></i><p> {caption}</p></button></NavLink>
	</div>
);

export default SearchBar;
