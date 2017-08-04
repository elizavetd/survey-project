import React from 'react'

import ImageHeading from './ImageHeding'
import AboutUs from './AboutUs'
import Education from './Education'
import Benefits from './Benefits'
import Advantages from './Advantages'
import Jobs from './Jobs'
import Students from './Students'
import Contacts from './Contacts'

export default class AboutPage extends React.Component {
  render() {
    return (
        <div className="content content_white">
			<section className="about-us">
            	<ImageHeading />
            	<AboutUs />
            	<Education />
            	<Benefits />
            	<Advantages />
				<Jobs />
				<Students />
				<Contacts />
			</section>
		</div>
    );
  }
}
