import React from "react"

const ContactButton = ({
    onClick,
    id,
    country,
    city 
}) => (
    <button onClick={onClick} data-id={id} className="contact__button">
		<p className="contact__country">{country}</p>
		<p className="contact__place">{city}</p>
	</button>
);

export default ContactButton;
