import React from "react"

const GalleryGrid = ({
    imageSrc,
    heading,
    description
}) => (
    <div className="gallery-grid">
		<figure className="gallery-grid__item">
			<img className="gallery-grid__image" src={imageSrc} />
			<svg viewBox="0 0 180 320" preserveAspectRatio="none">
				<path d="M 0 0 L 0 182 L 90 126.5 L 180 182 L 180 0 L 0 0 z " />
			</svg>
			<figcaption className="gallery-grid__caption">
				<h5 className="gallery-grid__heading">{heading}</h5>
				<p className="gallery-grid__description">{description}</p>
			</figcaption>
		</figure>
	</div>
);

export default GalleryGrid;
