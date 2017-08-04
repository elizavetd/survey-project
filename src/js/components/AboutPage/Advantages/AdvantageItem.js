import React from "react"

const AdvantageItem = ({ icon, text }) => (
    <div className="advantages__item">
		<div className="advantages__icon">
			<i className={icon} aria-hidden="true"></i>
		</div>
		<div className="advantages__text">
			<p>{text}</p>
		</div>
	</div>
);

export default AdvantageItem;
