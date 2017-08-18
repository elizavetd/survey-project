import React from 'react'

export default class Map extends React.Component {
	render() {
		const { link } = this.props;
		return (
		<iframe src={link}
			width="100%" height="500px;" frameBorder="0" style={{border: 0}} allowFullScreen></iframe>
		);
	}
}
