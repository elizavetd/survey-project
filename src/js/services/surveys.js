const surveys = {
	userSurveys: [
		{   
			id: 1,
			title: 'Javascript lecture feedback',
			description: 'Здравствуйте, потратьте, пожалуйста, несколько минут своего времени на заполнение следующего опроса.',
			imageSrc: './img/javascript.jpg',
			type: 'Образование',
			iconType: 'fa fa-commenting',
			finishMessage: 'Благодарим за прохождение опроса!',
			finishDetail: 'Посещайте наши лекции!',
			answersCount: 13,
			lastChangeDate: '01.01.2017',
			questionList: [
				{   
					id: 1,
					type: 'oneAnswer',
					question: 'Понравилась ли Вам лекция?',
					options: [
						'Да',
						'Нет',
						'Не знаю'
					]
				},
				{
					id: 2,
					type: 'text',
					question: 'Есть ли у Вас пожелания по улучшению проведения лекции?'
				},
				{
					id: 3,
					type: 'Оцените подачу материала по пятибалльной шкале:',
					question: 'Напишите свой вопрос здесь...'
				}
			]
		},
		{
			id: 2,
			title: "Опрос 1",
			description: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
			imageSrc: "./img/survey1.jpg",
			iconType: "fa fa-camera-retro",
			answersCount: 3,
			lastChangeDate: "15.04.2017"
		},
		{
			id: 3,
			title: "Опрос 2",
			description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
			imageSrc: "./img/survey2.jpg",
			iconType: "fa fa-camera-retro",
			answersCount: 20,
			lastChangeDate: "02.02.2017"
		},
		{
			id: 4,
			title: "Опрос 3",
			description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			imageSrc: "./img/survey3.jpg",
			iconType: "fa fa-university",
			answersCount: 132,
			lastChangeDate: "02.06.2017"
		},
		{
			id: 5,
			title: "Опрос 4",
			description: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
			imageSrc: "./img/survey4.jpg",
			iconType: "fa fa-university",
			answersCount: 34,
			lastChangeDate: "22.05.2017"
		}
	]
};

export default surveys;