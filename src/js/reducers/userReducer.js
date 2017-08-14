import { RECEIVE_CURRENT_USER, RECEIVE_USER_LIST } from '../actions/userActions'
import { store, sagaMiddleware } from '../store'
import { userList } from '../sagas/userSaga'

const initialState = {
    role: 'guest'
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
    case RECEIVE_CURRENT_USER:
        return Object.assign({}, state, action.currentUser);
    case RECEIVE_USER_LIST:
        return Object.assign({}, state, action.userList);
    default:
        return state;
    };
};

export function getUserList() {
    sagaMiddleware.run(userList);
}