// milyen akciot csinalt az ember amivel csokkenti a labnyomat (lehet tobb is)

import {ADD_SAVING, REMOVE_SAVING} from "../actions";

const initialState = {
    savings: [
        {
            date: '2023-11-25',
            name: 'Hozza jarulas fa ültetéshez',
            saving: 0.5 // hany kilo co2-t kot le


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