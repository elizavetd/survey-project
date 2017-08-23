import { store } from '../store'
import generateUniqueID from '../lib/generateUniqueID'

import _users from './users.json'
import _surveys from './surveys.json'
import _templates from './templates.json'
import _jobs from './jobs.json'
import _questions from './surveyQuestions'

const TIMEOUT = 100;

const myStorage = localStorage;

if(myStorage.length < 4) {
	myStorage.setItem('jobList', JSON.stringify(_jobs));
	myStorage.setItem('userList', JSON.stringify(_users));
	myStorage.setItem('templates', JSON.stringify(_templates));
	myStorage.setItem('surveys', JSON.stringify(_surveys));
}

//myStorage.setItem('currentUser', JSON.stringify({"role": "guest"}));

console.log(localStorage);

export const api = {
	getCurrentUser() {
		return new Promise( resolve => {
			resolve(JSON.parse(myStorage.getItem('currentUser')));
		});
	},

	setCurrentUser(user) {
		return new Promise( (resolve, reject) => {
			const searchedUser = JSON.parse(
				myStorage.getItem('userList')).users
				.filter(searchedUser => 
					(searchedUser.email === user.login && 
					searchedUser.password === user.password)
				);
			
			if (searchedUser.length === 1) {
				myStorage.setItem('currentUser', JSON.stringify(searchedUser[0]))
				resolve(searchedUser[0]);
			}
			else {
				reject(new Error("Неверное имя пользователя или пароль. Авторизация не удалась."))
			};
		});
	},

	addNewUser(user) {
		return new Promise( (resolve, reject) => {
			if (user.password !== user.passwordSubmit) {
				reject(new Error("Пароль не совпадает. Регистрация не удалась."))
			} else {
				let userList = JSON.parse(
					myStorage.getItem('userList')).users;

				const searchedUser = userList.filter(searchedUser => 
					(searchedUser.email === user.email || 
					searchedUser.username === user.username)
				);

				const d = new Date();
				
				if (searchedUser.length === 0) {
					const newUser = {
						id: generateUniqueID(),
						username: user.username,
						email: user.email,
						password: user.password,
						role: 'user',
						signupDate: `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`,
						surveys: 0
					};

					const newList = userList.concat([newUser]);
					myStorage.setItem('userList', JSON.stringify({"users": newList}));
					
					myStorage.setItem('currentUser', JSON.stringify(newUser));
					resolve(newUser);
				} else {
					reject(new Error("Пользователь с таким именем или электронной почтой уже существует. Регистрация не удалась."))
				};
			};
		});
	},

	removeUser(id) {
		return new Promise( (resolve, reject) => {
			const userList = JSON.parse(
				myStorage.getItem('userList')).users;

			const searchedUser = userList.filter(searchedUser => 
				(searchedUser.id === id)
			);
			
			if (searchedUser.length === 1) {
				const index = userList.findIndex(element => (element.id === id));

				const newList = [
					...userList.slice(0, index),
					...userList.slice(index + 1)
				];

				myStorage.setItem('userList', JSON.stringify({"users": newList}));
				resolve(true);
			} else {
				reject(new Error("Нет такого пользователя ¯\_(ツ)_/¯"));
			};
		});
	},

	modifyUser(id, newInfo) {
		return new Promise( (resolve, reject) => {
			const userList = JSON.parse(myStorage.getItem('userList')).users;

			let searchedUser = userList.filter(searchedUser => 
				(searchedUser.id === id)
			);
			
			if (newInfo.username && newInfo.role && searchedUser.length === 1) {
				const index = userList.findIndex(element => (element.id === id));

				if (newInfo.username && searchedUser.username !== newInfo.username) {
					searchedUser.username = newInfo.username;
				};

				if (newInfo.role && searchedUser.role !== newInfo.role) {
					searchedUser.role = newInfo.role;
				};

				const newList = [
					...userList.slice(0, index),
					...searchedUser,
					...userList.slice(index + 1)
				];

				myStorage.setItem('userList', JSON.stringify({"users": newList}));
				resolve(true);
			} else {
				reject(new Error("Ошибка редактирования данных"));
			};
		});
	},
	
	getUserList() {
		return new Promise( resolve => {
			resolve({userList: JSON.parse(myStorage.getItem('userList')).users});
		});
	},

	getUserSurveys(id) {
		return new Promise( resolve => {
			const surveys = JSON.parse(myStorage
				.getItem('surveys')).surveyList
				.filter(survey => survey.creator === id);
				
			resolve({surveyList: surveys});
		});
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