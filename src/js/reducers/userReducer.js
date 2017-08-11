const initialState = {
    id: 1,
    username: 'admin',
    email: 'admin@ad.min',
    password: '123',
    role: 'administrator',
    signupDate: '01.01/2017'
}

export default function userReducer(state = initialState, action) {
    return state;
};


// export function getProduct(state, id) {
//     return state.surveys[id];
// }
