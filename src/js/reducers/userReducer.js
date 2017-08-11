import { RECEIVE_CURRENT_USER, RECEIVE_USER_LIST } from '../actions/userActions'
import { store, sagaMiddleware } from '../store'
import { userList } from '../sagas/userSaga'

const initialState = {
    role: 'guest'
}

export default function userReducer(state = {}, action) {
    switch (action.type) {
    case RECEIVE_CURRENT_USER:
        state.currentUser = action.user;
        return state;
    case RECEIVE_USER_LIST:
      //  console.log(action)
       // state.userList = action.userList;
        // let obj = {};
        // for (let i = 0; i < action.userList.length; i++) {
        //     obj[action.userList[i].id] = action.userList[i];
        // }
        // state.userList = obj;
        state = Object.assign(state, action.userList)
        return state;
    default:
        return state;
    };
};

export function getUserList(state) {
    //console.log(state)
    sagaMiddleware.run(userList);
    const action = type => store.dispatch({type})
    return store.getState().user
}