import React from 'react'

import InfographicItem from '../InfographicItem'

export default class AboutUs extends React.Component {
  render() {
	let itemClass = "infographic__item infographic__item_width50";
	let captionClass = "infographic__caption infographic__caption_black";

	return (
		<article className="about-us__article about-us__article_white">
			<h2 className="about-us__heading">О нас</h2>
			<p className="about-us__text">When kicking off with iTechArt, our clients focus on their business while we nail the entire development project up to
				a turnkey product. We create dedicated teams packed with senior-level talent and easily scale them up and down to help
				these companies move fast in a dynamic market.</p>
			<p className="about-us__text">Мы следим за новинками и регулярно проводим техническое обучение, поддерживаем сертификацию наших специалистов и создаем
				уникальные обучающие программы, отвечая всем требованиям динамично развивающейся индустрии.</p>
			<div className="infographic">
				<div className="infographic__items-container">
					<InfographicItem
						itemClass = {itemClass}
						captionClass = {captionClass}
						caption = "Fresh Ideas" 
						icon = "fa fa-lightbulb-o"
						smallText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
					/>
					<InfographicItem
						itemClass = {itemClass}
						captionClass = {captionClass}
						caption = "Communication" 
						icon = "fa fa-comments-o"
						smallText = "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
					/>
					<InfographicItem
						itemClass = {itemClass}
						captionClass = {captionClass}
						caption = "Quality Support" 
						icon = "fa fa-cogs"
						smallText = "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
					/>
					<InfographicItem
						itemClass = {itemClass}
						captionClass = {captionClass}
						caption = "Puzzle Solving" 
						icon = "fa fa-puzzle-piece"
						smallText = "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium."
					/>
				</div>
			</div>
		</article>
	);
  }
}
