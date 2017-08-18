import React from 'react'

import AdvantageItem from './AdvantageItem'

export default class Advantages extends React.Component {
  render() {
	return (
		<article className="about-us__article">
			<h2 className="about-us__heading">Наши преимущества</h2>
			<div className="advantages">
				<AdvantageItem
					icon = "fa fa-cubes"
					text = "Гибкий подход как в менеджменте, так и в реализации новых идей"
				/>
				<AdvantageItem
					icon = "fa fa-graduation-cap"
					text = "Remarkable People — специалисты с глубокой технической экспертизой"
				/>
				<AdvantageItem
					icon = "fa fa-desktop"
					text = "Наши клиенты любят новые технологии так же страстно, как и мы"
				/>
				<AdvantageItem
					icon = "fa fa-book"
					text = "Мы учимся сами и делимся знаниями с другими"
				/>
				<AdvantageItem
					icon = "fa fa-smile-o"
					text = "У нас в компании доброжелательная и позитивная атмосфера"
				/>
			</div>
		</article>
	);
  }
}
