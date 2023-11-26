import {ADD_FOOTPRINT, REMOVE_FOOTPRINT} from "../actions";

const initialState = {
    footprints: [
        {
            date: (new Date()).toDateString(),
            name: 'Taking bus to MOME',
            footprint: 1.92
        },
        {
            date: (new Date()).toDateString(),
            name: 'Ordering snack from Wolt',
            footprint: 0.55
        },
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