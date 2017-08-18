export const GET_CURRENT_USER = 'GET_CURRENT_USER'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'

export const GET_USER_LIST = 'GET_USER_LIST'
export const RECEIVE_USER_LIST = 'RECEIVE_USER_LIST'

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
