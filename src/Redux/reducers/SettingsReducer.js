import {UPDATE_SETTINGS} from "../actions";

const initialState = {
    name: "Captain Quack",
    limit: 5
}

function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SETTINGS:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export default settingsReducer;