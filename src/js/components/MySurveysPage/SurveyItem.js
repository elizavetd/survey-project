import React from "react"

import {Caption, Details, Options } from './SurveyItemPartials'

const SurveyItem = ({ 
	id,
	creator,
	imageSrc,
	iconType,
	title,
	description,
	answersCount,
	lastChangeDate
}) => (
	<article className="survey-item">
		<Caption
			imageSrc = {imageSrc}
			iconType = {iconType}
			title = {title}
			description = {description}
		/>
	
		<div className="survey-item__details">
			<Details
				answersCount = {answersCount} 
				lastChangeDate = {lastChangeDate}
				creator = {creator}
			/>
			<Options id = {id} creator = {creator}/>
		</div>
	</article>
);

export default SurveyItem;
