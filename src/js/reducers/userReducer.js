import { RECEIVE_CURRENT_USER } from '../actions/userActions'

const initialState = {
    id: 1,
    username: 'admin',
    email: 'admin@ad.min',
    password: '123',
    role: 'administrator',
    signupDate: '01.01/2017'
}

export default function userReducer(state = {}, action) {
    switch (action.type) {
    case RECEIVE_CURRENT_USER:
        state = action.user;
        return state;
    default:
        return state;
    };
};


// export function getProduct(state, id) {
//     return state.surveys[id];
// }
