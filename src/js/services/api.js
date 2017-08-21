import { store } from '../store'

import _users from './users.json'
import _surveys from './surveys.json'
import _templates from './templates.json'
import _jobs from './jobs.json'
import _questions from './surveyQuestions'

const TIMEOUT = 100;

const myStorage = localStorage;

//myStorage.setItem('jobList', JSON.stringify(_jobs));
//myStorage.setItem('userList', JSON.stringify(_users));
//myStorage.setItem('templates', JSON.stringify(_templates));
//myStorage.setItem('surveys', JSON.stringify(_surveys));

console.log(localStorage);

export const api = {
	getCurrentUser() {
		return new Promise( resolve => {
			const user = JSON.parse(myStorage
				.getItem('userList')).users
				.filter(user => user.username === "admin");
			resolve(user);
		})
	},
	
	getUserList() {
		return new Promise( resolve => {
			resolve({userList: JSON.parse(myStorage.getItem('userList')).users})
		})
	},

	getUserSurveys() {
		return new Promise( resolve => {
			const surveys = JSON.parse(myStorage
				.getItem('surveys')).surveyList
				.filter(survey => survey.creator === '1');
			resolve({surveyList: surveys});
		})
	},

	getTemplates() {
		return new Promise( resolve => {
			resolve(JSON.parse(myStorage.getItem('templates')));
		});
	},

	getQuestionList() {
		return new Promise( resolve => {
			setTimeout(() => resolve(_questions[0].questionList), TIMEOUT)
		})
	},

	addQuestion(question) {
		return new Promise( resolve => setTimeout(() => {
			resolve(Object.assign(_questions[0].questionList, question ))
		}, TIMEOUT));
	},

	getJobs() {
		return new Promise( resolve => {
			resolve(JSON.parse(myStorage.getItem('jobList')).jobs);
		});
	}
};