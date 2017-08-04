import React from "react"

const ContactButton = ({
    country,
    city 
}) => (
    <button className="contact__button">
		<p className="contact__country">{country}</p>
		<p className="contact__place">{city}</p>
	</button>
);

export default ContactButton;
