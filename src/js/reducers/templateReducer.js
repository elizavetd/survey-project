import { RECEIVE_TEMPLATES } from '../actions/templateActions'

export default function templateReducer(state = {}, action) {
    switch (action.type) {
    case RECEIVE_TEMPLATES:
        state = action.templates
        return state
    default:
        // const { templateId } = action
        // if (templateId) {
        //     return {
        //         ...state,
        //         [templateId]: templates(state[templateId], action)
        //     }
        // }
        return state;
    };
};
