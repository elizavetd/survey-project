import React from 'react'

import Address from './Address'
import ContactForm from './ContactForm'
import ContactButton from './ContactButton.js'
import Map from './Map'

export default class Contacts extends React.Component {
  render() {
    return (
        <article className="about-us__article about-us__article_full-width">
			<div className="contact">
				<h2 className="about-us__heading">Контакты</h2>
                <div className="contact__container">
                    <Address
                        city = 'Minsk'
                        country = 'Belarus'
                        postcode = '220007'
                        street = '10 Tolstoy street'
                        detail = 'Development center'
                    />
                    <ContactForm />
				</div>
				<div className="contact__button-set">
                    <ContactButton
                        country = "USA"
                        city = "NEW YORK"
                    />
                    <ContactButton
                        country = "USA"
                        city = "MARIETTA, GA"
                    />
                    <ContactButton
                        country = "Belarus"
                        city = "MINSK"
                    />	
				</div>
                <Map />
            </div>
        </article>
    );
  }
}
