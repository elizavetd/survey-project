import React from 'react'

export default class Benefits extends React.Component {
	render() {
		return (
			<article className="about-us__article about-us__article_white">
				<h2 className="about-us__heading">Бенефиты</h2>
				<p className="about-us__text about-us__text_large">Мы заботимся о том, чтобы работа Remarkable People в нашей компании была комфортной:</p>
				<div className="benefits">
					<ul className="regular-list">
						<li>офис в бизнес-центре А-класса в шаговой доступности от метро, центр города</li>
						<li>хорошо оборудованные просторные рабочие места и все самые новые гаджеты для работы</li>
						<li>гибкий график</li>
						<li>зона свободного Wi-Fi</li>
					</ul>
					<ul className="regular-list">
						<li>лаунж-зоны для отдыха, настольный теннис, Xbox, турник,настольные игры</li>
						<li>крытая охраняемая велопарковка</li>
						<li>оборудованные душевые в офисе</li>
						<li>мини-кухни</li>
						<li>кафе и ресторан в здании офиса</li>
					</ul>
				</div>
			</article>
		);
	}
}
