import React from 'react'

import ImageHeading from './ImageHeading/ImageHeading'
import AboutUs from './AboutUs/AboutUs'
import Education from './Education/Education'
import Benefits from './Benefits/Benefits'
import Advantages from './Advantages/Advantages'
import Jobs from './Jobs/Jobs'
import Students from './Students/Students'
import Contacts from './Contacts/Contacts'

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
