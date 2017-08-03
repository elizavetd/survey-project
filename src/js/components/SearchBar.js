import React from "react"

const SearchBar = ({ placeholder, link, caption }) => (
    <div className="operations-bar operations-bar_survey-list">
		<i className="fa fa-search" aria-hidden="true"></i>
		<input className="search-bar operations-bar__search" type="search" placeholder={placeholder}></input>
		<a href={link}><button className="operations-bar__new-template operations-bar__new-template_right"><i className="fa fa-plus-circle" aria-hidden="true"></i><p> {caption}</p></button></a>
	</div>
);

export default SearchBar;
