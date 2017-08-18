import React from 'react'

export default class Socials extends React.Component {
	render() {
		return (
			<div className="socials">
				<button><i className="fa fa-facebook" aria-hidden="true"></i></button>
				<button><i className="fa fa-twitter" aria-hidden="true"></i></button>
				<button><i className="fa fa-google-plus" aria-hidden="true"></i></button>
				<button><i className="fa fa-linkedin" aria-hidden="true"></i></button>
				<button><i className="fa fa-vk" aria-hidden="true"></i></button>
			</div>
		);
	}
}
