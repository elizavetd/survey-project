export const GET_CURRENT_USER = 'GET_CURRENT_USER'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'

export const GET_USER_LIST = 'GET_USER_LIST'
export const RECEIVE_USER_LIST = 'RECEIVE_USER_LIST'

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const REQUEST_SIGNUP = 'REQUEST_SIGNUP'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'

export const LOGOUT = 'LOGOUT'

export function getCurrentUser() {
	return {
		type: GET_CURRENT_USER
	}
}

export function receiveCurrentUser(user) {
	return {
		type: RECEIVE_CURRENT_USER,
		user: user
	}
}

export function getUserList() {
	return {
		type: GET_USER_LIST
	}
}

export function receiveUserList(userList) {
	return {
		type: RECEIVE_USER_LIST,
		userList: userList
	}
}

export function requestLogin(user) {
	return {
		type: REQUEST_LOGIN,
		user: user
	}
}

// export function loginSuccess() {
// 	return {
// 		type: LOGIN_SUCCESS
// 	}
// }

export function loginFailure(error) {
	return {
		type: LOGIN_FAILURE,
		error: error
	}
}

export function requestSignup(user) {
	return {
		type: REQUEST_SIGNUP,
		user: user
	}
}

export function signupSuccess() {
	return {
		type: SIGNUP_SUCCESS
	}
}

export function signupFailure() {
	return {
		type: SIGNUP_FAILURE
	}
}

export function logout() {
	return {
		type: LOGOUT
	}
}