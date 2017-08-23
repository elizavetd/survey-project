export const GET_CURRENT_USER = 'GET_CURRENT_USER'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'

export const GET_USER_LIST = 'GET_USER_LIST'
export const RECEIVE_USER_LIST = 'RECEIVE_USER_LIST'

export const LOGOUT = 'LOGOUT'

export const REQUEST_USER_REMOVAL = 'REQUEST_USER_REMOVAL'
export const REMOVE_USER_SUCCESS = 'REMOVE_USER_SUCCESS'
export const REMOVE_USER_FAILURE = 'REMOVE_USER_FAILURE'

export const REQUEST_USER_MODIFICATION = 'REQUEST_USER_MODIFICATION'
export const MODIFY_USER_SUCCESS = 'MODIFY_USER_SUCCESS'
export const MODIFY_USER_FAILURE = 'MODIFY_USER_FAILURE'

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

export function logout() {
	return {
		type: LOGOUT
	}
}

export function requestUserRemoval(id) {
	return {
		type: REQUEST_USER_REMOVAL,
		id: id
	}
}

export function removeUserSuccess() {
	return {
		type: REMOVE_USER_SUCCESS
	}
}

export function removeUserFailure() {
	return {
		type: REMOVE_USER_FAILURE
	}
}

export function requestUserModification(id, newInfo) {
	return {
		type: REQUEST_USER_MODIFICATION,
		id: id,
		newInfo: newInfo
	}
}

export function modifyUserSuccess() {
	return {
		type: MODIFY_USER_SUCCESS
	}
}

export function modifyUserFailure() {
	return {
		type: MODIFY_USER_FAILURE
	}
}

// export const REQUEST_LOGIN = 'REQUEST_LOGIN'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILURE = 'LOGIN_FAILURE'

// export const REQUEST_SIGNUP = 'REQUEST_SIGNUP'
// export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
// export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'

// export function requestLogin(user) {
// 	return {
// 		type: REQUEST_LOGIN,
// 		user: user
// 	}
// }

// export function loginSuccess() {
// 	return {
// 		type: LOGIN_SUCCESS
// 	}
// }

// export function loginFailure(error) {
// 	return {
// 		type: LOGIN_FAILURE,
// 		error: error
// 	}
// }

// export function requestSignup(user) {
// 	return {
// 		type: REQUEST_SIGNUP,
// 		user: user
// 	}
// }

// export function signupSuccess() {
// 	return {
// 		type: SIGNUP_SUCCESS
// 	}
// }

// export function signupFailure() {
// 	return {
// 		type: SIGNUP_FAILURE
// 	}
// }