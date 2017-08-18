import React from "react"

const InfographicItem = ({
	itemClass,
	captionClass, 
	caption,
	number, 
	icon,
	smallText
}) => (
	<div className={itemClass}>
		{icon && <p className="infographic__icon">
			<i className={icon} aria-hidden="true"></i>
		</p>}
		{number && <p className="infographic__number">{number}</p>}
		{caption && <p className={captionClass}>{caption}</p>}
		{smallText && <p className="infographic__small-text">{smallText}</p>}
	</div> 
);

export default InfographicItem;
