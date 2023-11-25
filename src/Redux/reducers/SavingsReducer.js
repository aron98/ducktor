// milyen akciot csinalt az ember amivel csokkenti a labnyomat (lehet tobb is)

import {ADD_SAVING, REMOVE_SAVING} from "../actions";

const initialState = {
    savings: [
        {
            date: (new Date()).toDateString(),
            name: 'Recycled 10 water bottles',
            saving: 0.65


        }
    ]
};

function savingsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SAVING:
            const newSaving = {
                ...action.data,
                date: (new Date()).toDateString()
            }
            return {
                savings: [...state.savings, newSaving]
            };
        case REMOVE_SAVING:
            let newState = [...state.savings]
            newState.splice(action.data, 1)
            return {
                savings: newState
            }
        default:
            return state;
    }
}

export default savingsReducer;