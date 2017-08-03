import React from 'react'

import ImageHeading from './ImageHeding'
import AboutUs from './AboutUs'
import Education from './Education'
import Benefits from './Benefits'
import Advantages from './Advantages'
import Jobs from './Jobs'

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

			

			{/* <article className="about-us__article about-us__article_white">
				<h2 className="about-us__heading">Вакансии</h2>
				<div className="jobs-list">
					<div className="job-list__item">
						<div className="jobs-list__job">
							<h3 className="jobs-list__job-name">PHP TEAM LEAD</h3>
							<i className="fa fa-chevron-down" aria-hidden="true"></i>
						</div>
						<div className="jobs-list__requirements jobs-list__requirements_displayed" >
							<p>Requirements</p>
							<ul className="regular-list">
								<li>3+ years of professional experience in software design & development of complex systems with demonstrated experience
									with PHP frameworks, preferably with Yii, Symphony</li>
								<li>Minimum 1 year of management experience</li>
								<li>Computer science fundamentals (data structures, algorithms, and programming languages)</li>
								<li>English language skills at the level of correspondence and communication with the customer</li>
								<li>Experience with LAMP stack technologies</li>
								<li>Excellent communication and collaboration skills</li>
							</ul>
						</div>
					</div>

					<div className="job-list__item">
						<div className="jobs-list__job">
							<h3 className="jobs-list__job-name">PYTHON SENIOR SOFTWARE DEVELOPER</h3>
							<i className="fa fa-chevron-down" aria-hidden="true"></i>
						</div>
						<div className="jobs-list__requirements">
							<p>Requirements</p>
							<ul>
								<li>3+ years of professional experience in software design & development of complex systems with demonstrated experience
									with PHP frameworks, preferably with Yii, Symphony</li>
								<li>Minimum 1 year of management experience</li>
								<li>Computer science fundamentals (data structures, algorithms, and programming languages)</li>
								<li>English language skills at the level of correspondence and communication with the customer</li>
								<li>Experience with LAMP stack technologies</li>
								<li>Excellent communication and collaboration skills</li>
							</ul>
						</div>
					</div>

					<div className="job-list__item">
						<div className="jobs-list__job">
							<h3 className="jobs-list__job-name">SENIOR / TEAM LEAD FRONT-END DEVELOPER</h3>
							<i className="fa fa-chevron-down" aria-hidden="true"></i>
						</div>
						<div className="jobs-list__requirements">
							<p>Requirements</p>
							<ul>
								<li>3+ years of professional experience in software design & development of complex systems with demonstrated experience
									with PHP frameworks, preferably with Yii, Symphony</li>
								<li>Minimum 1 year of management experience</li>
								<li>Computer science fundamentals (data structures, algorithms, and programming languages)</li>
								<li>English language skills at the level of correspondence and communication with the customer</li>
								<li>Experience with LAMP stack technologies</li>
								<li>Excellent communication and collaboration skills</li>
							</ul>
						</div>
					</div>

					<div className="job-list__item">
						<div className="jobs-list__job">
							<h3 className="jobs-list__job-name">RUBY TEAM LEAD</h3>
							<i className="fa fa-chevron-down" aria-hidden="true"></i>
						</div>
						<div className="jobs-list__requirements">
							<p>Requirements</p>
							<ul>
								<li>3+ years of professional experience in software design & development of complex systems with demonstrated experience
									with PHP frameworks, preferably with Yii, Symphony</li>
								<li>Minimum 1 year of management experience</li>
								<li>Computer science fundamentals (data structures, algorithms, and programming languages)</li>
								<li>English language skills at the level of correspondence and communication with the customer</li>
								<li>Experience with LAMP stack technologies</li>
								<li>Excellent communication and collaboration skills</li>
							</ul>
						</div>
					</div>

					<div className="job-list__item">
						<div className="jobs-list__job">
							<h3 className="jobs-list__job-name">SENIOR QA ENGINEER</h3>
							<i className="fa fa-chevron-down" aria-hidden="true"></i>
						</div>
						<div className="jobs-list__requirements">
							<p>Requirements</p>
							<ul>
								<li>3+ years of professional experience in software design & development of complex systems with demonstrated experience
									with PHP frameworks, preferably with Yii, Symphony</li>
								<li>Minimum 1 year of management experience</li>
								<li>Computer science fundamentals (data structures, algorithms, and programming languages)</li>
								<li>English language skills at the level of correspondence and communication with the customer</li>
								<li>Experience with LAMP stack technologies</li>
								<li>Excellent communication and collaboration skills</li>
							</ul>
						</div>
					</div>

					<div className="job-list__item">
						<div className="jobs-list__job">
							<h3 className="jobs-list__job-name">QA ENGINEER</h3>
							<i className="fa fa-chevron-down" aria-hidden="true"></i>
						</div>
						<div className="jobs-list__requirements">
							<p>Requirements</p>
							<ul>
								<li>3+ years of professional experience in software design & development of complex systems with demonstrated experience
									with PHP frameworks, preferably with Yii, Symphony</li>
								<li>Minimum 1 year of management experience</li>
								<li>Computer science fundamentals (data structures, algorithms, and programming languages)</li>
								<li>English language skills at the level of correspondence and communication with the customer</li>
								<li>Experience with LAMP stack technologies</li>
								<li>Excellent communication and collaboration skills</li>
							</ul>
						</div>
					</div>

				</div>
			</article> */}

			<article className="about-us__article about-us__article_students">
				<div className="opacify"></div>
				<div className="student-content">
					<div>
						<h2 className="about-us__heading">Для студентов</h2>
						<p className="about-us__text">Students Lab** — обучающие курсы для студентов 2-4 курсов IT специальностей и начинающих специалистов. Мы проводим
							обучение по следующим направлениям:</p>
						<img src="https://hhcdn.ru/ichameleon/65669.png" />
						<img src="https://hhcdn.ru/ichameleon/65670.png" />
						<p className="about-us__text">Средняя продолжительность обучения — 3 месяца. Чтобы попасть на курсы, нужно пройти серьезный отбор в несколько этапов,
							включая телефонное интервью, техническое тестирование и очное интервью в компании.</p>
					</div>
				</div>
			</article>

			<article className="about-us__article about-us__article_full-width">
				<div className="contact">
					<h2 className="about-us__heading">Контакты</h2>
					<div className="contact__container">
						<div className="contact__address">
							<h3 className="contact__city">Minsk office</h3>
							<p className="about-us__text">Development center</p>
							<p className="about-us__text">10 Tolstoy street, Minsk,</p>
							<p className="about-us__text">Belarus, 220007</p>
						</div>
						<form className="contact__form">
							<input type="text" placeholder="Ваше имя" />
							<input type="email" placeholder="Ваш электронный адрес" />
							<textarea placeholder="Ваше сообщение"></textarea>
							<input className="contact__form-button" type="submit" value="Отправить" />
						</form>
					</div>
					<div className="contact__button-set">
						<button className="contact__button">
							<p className="contact__country">USA</p>
							<p className="contact__place">NEW YORK</p>
						</button>
						<button className="contact__button">
							<p className="contact__country">USA</p>
							<p className="contact__place">MARIETTA, GA</p>
						</button>
						<button className="contact__button">
							<p className="contact__country">Belarus</p>
							<p className="contact__place">MINSK</p>
						</button>
					</div>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.445593156324!2d27.54207281620859!3d53.888283580096186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfdfce65e59f%3A0xa2e019b67477bdbe!2z0YPQuy4g0KLQvtC70YHRgtC-0LPQviAxMCwg0JzQuNC90YHQuiwg0JHQtdC70LDRgNGD0YHRjA!5e0!3m2!1sru!2sru!4v1500465401808"
					  width="100%" height="500px;" frameBorder="0" style={{border: 0}} allowFullScreen></iframe>
                </div>
            </article>
		</section>
	</div>
    );
  }
}
