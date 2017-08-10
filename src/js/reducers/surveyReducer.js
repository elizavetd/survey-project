import { RECEIVE_SURVEYS } from '../actions/userSurveysActions'

export default function surveyReducer(state = {}, action) {
    switch (action.type) {
    case RECEIVE_SURVEYS:
        state = action.surveys
        return state
        //return Object.assign(state, action.surveys);
    default:
        // const { surveyId } = action
        // if (surveyId) {
        //     return {
        //         ...state,
        //         [surveyId]: surveys(state[surveyId], action)
        //     }
        // }
        return state;
    };
};

//export function getSurveys(state) {
   // console.log(state)
    //return state;
//}

// export function getProduct(state, id) {
//     return state.surveys[id];
// }
