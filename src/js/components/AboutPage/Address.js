import React from "react"

const Address = ({
    city,
    country,
    postcode,
    street,
    phone,
    detail
}) => (
    <div className="contact__address">
		{(country == 'Belarus') && <div>
            <h3 className="contact__city">{city} office</h3>
		    <p className="about-us__text">{detail}</p>
		    <p className="about-us__text">{street}, {city},</p>
		    <p className="about-us__text">{country}, {postcode}</p>
        </div>}
        {(country != 'Belarus') && <div>
            <h3 className="contact__city">{city} office</h3>
		    <p className="about-us__text">{street}, {detail}</p>
		    <p className="about-us__text">{city}, {postcode}</p>
		    <p className="about-us__text">Phone: {phone}</p>
        </div>}
	</div>
);

export default Address;

