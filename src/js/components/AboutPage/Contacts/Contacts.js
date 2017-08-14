import React from 'react'

import Address from './Address'
import ContactForm from './ContactForm'
import ContactButton from './ContactButton.js'
import Map from './Map'

export default class Contacts extends React.Component {
    constructor() {
		super();
		this.state = {
            clicked: '3',
            address: {
                city: 'Minsk',
                country: 'Belarus',
                postcode: '220007',
                street: '10 Tolstoy street',
                phone: undefined,
                detail: 'Development center'
            },
            link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.445593156324!2d27.542072816208613!3d53.888283580096186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfdfce65e59f%3A0xa2e019b67477bdbe!2z0YPQuy4g0KLQvtC70YHRgtC-0LPQviAxMCwg0JzQuNC90YHQuiwg0JHQtdC70LDRgNGD0YHRjA!5e0!3m2!1sru!2sru!4v1502714576890'
		}
		this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        this.setState({ 
            clicked: e.currentTarget.dataset.id
        });
        let buttons = document.getElementsByClassName('contact__button');
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = 'transparent';
        }
        e.currentTarget.style.backgroundColor = '#EB1C23';
        switch(e.currentTarget.dataset.id) {
            case '1':
                return this.setState({
                    address: {
                        city: 'New York',
                        country: 'USA',
                        postcode: 'NY 10022',
                        street: '300 Park Avenue',
                        phone: '718 374 5043',
                        detail: '14th Floor'
                    },
                    link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10166.071100569361!2d-73.96764346768192!3d40.75342374344019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fc5a7dd82d%3A0x24fa2478de90e017!2zMzAwIFBhcmsgQXZlLCBOZXcgWW9yaywgTlkgMTAwMjIsINCh0KjQkA!5e0!3m2!1sru!2sru!4v1502714892719'
                })
            case '2':
                return this.setState({
                    address: {
                        city: 'Marietta, GA',
                        country: 'USA',
                        postcode: 'GA 30062',
                        street: '3535 Roswell Road',
                        phone: '678 433 1465',
                        detail: 'Suite 45'
                    },
                    link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94333.48949022364!2d-84.47992203947008!3d33.968636001401094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f512634f4b8c73%3A0x81dd89f9cbf140f1!2zMzUzNSBSb3N3ZWxsIFJkLCBNYXJpZXR0YSwgR0EgMzAwNjIsINCh0KjQkA!5e0!3m2!1sru!2sru!4v1502715024626'
                })
            case '3':
                return this.setState({
                    address: {
                        city: 'Minsk',
                        country: 'Belarus',
                        postcode: '220007',
                        street: '10 Tolstoy street',
                        phone: undefined,
                        detail: 'Development center'
                    },
                    link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.445593156324!2d27.542072816208613!3d53.888283580096186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfdfce65e59f%3A0xa2e019b67477bdbe!2z0YPQuy4g0KLQvtC70YHRgtC-0LPQviAxMCwg0JzQuNC90YHQuiwg0JHQtdC70LDRgNGD0YHRjA!5e0!3m2!1sru!2sru!4v1502714576890'
                })
        }
    }

    render() {
        return (
            <article className="about-us__article about-us__article_full-width">
                <div className="contact">
                    <h2 className="about-us__heading">Контакты</h2>
                    <div className="contact__container">
                        <Address
                            city = {this.state.address.city}
                            country = {this.state.address.country}
                            postcode = {this.state.address.postcode}
                            street = {this.state.address.street}
                            phone = {this.state.address.phone}
                            detail = {this.state.address.detail}
                        />
                        <ContactForm />
                    </div>
                    <div className="contact__button-set">
                        <ContactButton
                            onClick = {this.handleClick}
                            id="1"
                            country = "USA"
                            city = "NEW YORK"
                        />
                        <ContactButton
                            onClick = {this.handleClick}
                            id="2"
                            country = "USA"
                            city = "MARIETTA, GA"
                        />
                        <ContactButton
                            onClick = {this.handleClick}
                            id="3"
                            country = "Belarus"
                            city = "MINSK"
                        />	
                    </div>
                    <Map link={this.state.link}/>
                </div>
            </article>
        );
    }
}
