import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../store'
import { getTemplates } from '../../actions/templateActions'

import SearchBar from '../SearchBar'
import PaginationBar from '../PaginationBar'
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

		this.state = {
			page: 1,
		}

		this.filter = this.filter.bind(this);

		this.showFirstPage = this.showFirstPage.bind(this);
		this.showPreviousPage = this.showPreviousPage.bind(this);
		this.showNextPage = this.showNextPage.bind(this);
		this.showLastPage = this.showLastPage.bind(this);
	}

	componentWillMount() {
		this.props.getTemplates();
	}

	filter(e) {
		this.setState({filter: e.target.value});
	}

	showFirstPage() {
		this.setState({
			page: 1
		})
	}

	showPreviousPage() {
		this.setState({
			page: --this.state.page
		})
	}

	showNextPage() {
		this.setState({
			page: ++this.state.page
		})
	}

	showLastPage() {
		this.setState({
			page: Math.ceil(this.props.templates.length / 9)
		})
	}

	render() {
		let { templates } = this.props;

		if(this.state.filter) {
			templates = templates.filter(
				template => template.title.toLowerCase()
							.includes(this.state.filter.toLowerCase()));
		}

		let itemCountCaption = "Всего шаблонов:";
		let itemCount = 0;
		let itemsPerPage = 9;
		let pageCount;
		let pageNumber = this.state.page;
		let hasSideInfo = true;
		let templatesOnPage;

		if (templates) {
			itemCount = templates.length;

			templatesOnPage = templates.filter((elem, index) =>
				(index >= ((this.state.page - 1) * itemsPerPage)) && 
				(index < ((this.state.page - 1) * itemsPerPage + itemsPerPage))
			);

			pageCount = Math.ceil(itemCount / itemsPerPage);
		};

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
						<div style={{height: '20px'}}></div>
						{(templates && templates.length > 0) && 
							<PaginationBar 
								hasSideInfo = {hasSideInfo}
								itemCountCaption = {itemCountCaption}
								itemCount = {itemCount}
								pageNumber = {this.state.page}
								pageCount = {pageCount}
								toStart = {this.showFirstPage}
								prev = {this.showPreviousPage}
								next = {this.showNextPage}
								toEnd = {this.showLastPage}
							/>
						}
					</div>
					
					<div className="list">
						{templates && templatesOnPage.map(template =>
							<TemplatePreview
								key = {template.id}
								id = {template.id}
								iconType = {template.iconType}
								type = {template.type}
								imageSrc = {template.imageSrc}
								title = {template.title}
								description = {template.description}
								questionsCount = {template.questionsCount}
								pageCount = {template.pageCount}
								creator = {template.creator}
								finishMessage = {template.finishMessage}
								finishDetail = {template.finishDetail}
								questionList = {template.questionList}
							/>
						)}

						{templates && templates.length === 0 &&
							<p className="template-list__no-temlates">Шаблонов нет</p>
						}
					</div>

					<div className="my-surveys" style={{'position': 'relative', 'bottom': '6vh', 'marginTop': '0'}}>
						{(templates && templates.length > 0) && 
							<PaginationBar 
								hasSideInfo = {hasSideInfo}
								itemCountCaption = {itemCountCaption}
								itemCount = {itemCount}
								pageNumber = {this.state.page}
								pageCount = {pageCount}
								toStart = {this.showFirstPage}
								prev = {this.showPreviousPage}
								next = {this.showNextPage}
								toEnd = {this.showLastPage}
								style = {{'paddingBottom': '50px'}}
							/>
						}
					</div>
				</section>
			</div>
		);
	};
};
