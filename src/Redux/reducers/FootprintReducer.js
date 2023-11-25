import {ADD_FOOTPRINT, REMOVE_FOOTPRINT} from "../actions";

const initialState = {
    footprints: [
        {
            date: '2023-11-25',
            name: 'Hajszaritas 5 percen keresztul',
            footprint: 0.5
        }
    ]
}

function footprintReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FOOTPRINT:
            const newFootprint = {
                ...action.data,
                date: (new Date()).toDateString()
            }
            return {
                footprints: [...state.footprints, newFootprint]
            }
        case REMOVE_FOOTPRINT:
            let newState = [...state.footprints]
            newState.splice(action.data, 1)
            return {
                footprints: newState
            }
        default:
            return state;
    }
}

export default footprintReducer;