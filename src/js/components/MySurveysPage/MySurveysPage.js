import React from 'react'
import { connect } from 'react-redux'
//import { getSurveys } from '../../reducers/userReducer'
import { sagaMiddleware } from '../../store'
import mySaga from '../../sagas/mySaga'

import SearchBar from '../SearchBar'
import PaginationBar from '../PaginationBar'
import SurveyItem from './SurveyItem'

@connect((store) => {
    return {
        surveys: store.surveys.userSurveys
    };
})

class MySurveysPage extends React.Component {
    componentWillMount() {
        
        sagaMiddleware.run(mySaga);
    }
    render() {
        const { surveys } = this.props;

        let itemCountCaption = "Всего опросов:";
        let itemCount = 37;
        let itemsPerPage = 5;
        let pageCount = Math.ceil(itemCount / itemsPerPage);
        let pageNumber = 1;
        let hasSideInfo = true;

    return (
        <div className="content">
		<section className="my-surveys">
            <SearchBar 
                placeholder="Найти опрос" 
                link="/new-survey"
                caption="Новый опрос"
            />
             {console.log(surveys)} 
            <PaginationBar 
                hasSideInfo = {hasSideInfo}
                itemCountCaption={itemCountCaption}
                itemCount = {itemCount}
                pageNumber={pageNumber}
                pageCount = {pageCount}
            />
			<div className="surveys-list">
                {surveys && surveys.map(survey =>
                    <SurveyItem 
                        key = {survey.id}
                        imageSrc={survey.imageSrc}
                        iconType={survey.iconType}
                        title={survey.title}
                        description={survey.description}
                        answersCount={survey.answersCount}
                        lastChangeDate={survey.lastChangeDate}
                    />
                )}
                {/* <SurveyItem 
                    imageSrc="./img/javascript.jpg"
                    iconType="fa fa-commenting"
                    title="Javascript lecture feedback"
                    description="Здравствуйте, потратьте, пожалуйста, несколько минут своего времени на заполнение следующего опроса."
                    answersCount={13}
                    lastChangeDate="01.01.2017"
                />
                <SurveyItem 
                    imageSrc="./img/survey1.jpg"
                    iconType="fa fa-camera-retro"
                    title="Опрос 1"
                    description="Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
                    answersCount={3}
                    lastChangeDate="15.04.2017"
                />
                <SurveyItem 
                    imageSrc="./img/survey2.jpg"
                    iconType="fa fa-camera-retro"
                    title="Опрос 2"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
                    answersCount={20}
                    lastChangeDate="02.02.2017"
                />
                <SurveyItem 
                    imageSrc="./img/survey3.jpg"
                    iconType="fa fa-university"
                    title="Опрос 3"
                    description="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    answersCount={132}
                    lastChangeDate="02.06.2017"
                />
                <SurveyItem 
                    imageSrc="./img/survey4.jpg"
                    iconType="fa fa-university"
                    title="Опрос 4"
                    description="Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
                    answersCount={34}
                    lastChangeDate="22.05.2017"
                /> */}
			</div>
			<PaginationBar hasSideInfo = {!hasSideInfo} />
		</section>
	</div>
    );
  }
}

export default MySurveysPage;
