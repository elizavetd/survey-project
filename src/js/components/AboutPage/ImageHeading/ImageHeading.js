import React from 'react'

import InfographicItem from '../InfographicItem'

export default class ImageHeading extends React.Component {
  render() {
	let itemClass = "infographic__item";
	let captionClass = "infographic__caption";

	return (
		<article className="about-us__article about-us__article_img-background">
			<div className="infographic infographic_absolute">
				<div className="infographic__items-container">
					<InfographicItem 
						itemClass = {itemClass}
						captionClass = {captionClass}
						caption = "Основаны в"
						number = "2002"
					/> 
					<InfographicItem 
						itemClass = {itemClass}
						captionClass = {captionClass}
						caption = "Сотрудников"
						number = "700+"
					/> 
					<InfographicItem 
						itemClass = {itemClass}
						captionClass = {captionClass}
						caption = "Клиентов"
						number = "100+"
					/> 
				</div>
				<p className="inphographic__description">iTechArt Group — это команда Remarkable People, профессионалов в сфере разработки, тестирования, сервисной поддержки
					программных продуктов, модернизации и интеграции бизнес-приложений. Мы страстно любим то, чем занимаемся, и стремимся
					к совершенству в решении любых задач!</p>
			</div>
		</article>
	);
  }
}
