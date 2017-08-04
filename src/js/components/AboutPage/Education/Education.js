import React from 'react'

import GalleryGrid from './GalleryGrid'

export default class Education extends React.Component {
  render() {
    return (
        <article className="about-us__article about-us__article_full-width">
			<h2 className="about-us__heading">Обучение</h2>
			<p className="about-us__text about-us__text_large">Мы стремимся к профессиональному самосовершенствованию и для этого используем различные инструменты:</p>
			<div className="gallery-grid__container">
                <GalleryGrid
                    imageSrc = "./img/english.jpg"
                    heading = "Курсы английского языка"
                    description ="Изучение английского языка для сотрудников."
                />
				<GalleryGrid
                    imageSrc = "./img/student.jpg"
                    heading  = "Students Lab"
                    description ="Обучающие курсы для студентов и начинающих специалистов."
                />
                <GalleryGrid
                    imageSrc = "./img/training.jpg"
                    heading = "Внешние тренинги"
                    description ="Лекции экспертов, в том числе зарубежных."
                />
                <GalleryGrid
                    imageSrc = "./img/forum.jpg"
                    heading = "iTechForum"
                    description ="Ежегодная внутренняя конференция и хакатон."
                />
			</div>
		</article>
    );
  }
}
