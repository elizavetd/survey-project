import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../store'
import { getTemplates } from '../../actions/templateActions'

import SearchBar from '../SearchBar'
import TemplatePreview from './TemplatePreview'

const mapDispatchToProps = (dispatch) => {
	return {
		getTemplates: () => store.dispatch(getTemplates())
	};
};

const mapStateToProps = (store) => {
	return {
		templates: store.template.templates
	};
};

@connect(mapStateToProps, mapDispatchToProps)
export default class TemplatesPage extends React.Component {
	constructor() {
		super();
		this.state = {}
		this.filter = this.filter.bind(this);
	}

	componentWillMount() {
		this.props.getTemplates();
	}

	filter(e) {
		this.setState({filter: e.target.value});
	}

	render() {
		let { templates } = this.props;

		if(this.state.filter) {
			templates = templates.filter(
				template => template.title.toLowerCase()
							.includes(this.state.filter.toLowerCase()));
		}

		return (
			<div className="content">
				<section className="templates">
					<div className="my-surveys">
					<SearchBar 
						onChange = {this.filter}
						placeholder="Найти шаблон" 
						link="/new-survey"
						caption="Новый шаблон"
					/>
					</div>
					<div className="list">
						{templates && templates.map(template =>
							<TemplatePreview
								key = {template.id}
								iconType = {template.iconType}
								title = {template.title}
								description = {template.description}
								questionsCount = {template.questionsCount}
								pageCount = {template.pageCount}
							/>
						)}
					</div>
				</section>
			</div>
		);
	}
}
