import React from "react"

const TemplatePreview = ({ 
    iconType,
    title,
    description,
    questionsCount,
    pageCount
}) => (
    <article className="template-preview">
		<div className="template-preview__icon"><i className={iconType} aria-hidden="true"></i></div>
		<div className="template-preview__edit-buttons">
			<button className="template-preview__button-edit"><i className="fa fa-pencil" aria-hidden="true"></i></button>
			<button className="template-preview__button-delete"><i className="fa fa-trash" aria-hidden="true"></i></button>
		</div>
		<h3 className="template-preview__header">{title}</h3>
		<p className="template-preview__description">{description}</p>
		<div className="template-preview__info">
			<p>Вопросов: {questionsCount}</p>
			<p>Страниц: {pageCount}</p>
		</div>
		<button className="template-preview__button-create">Создать опрос</button>
	</article>
);

export default TemplatePreview;