// milyen akciot csinalt az ember amivel csokkenti a labnyomat (lehet tobb is)

const initialState = {
    savings: [
        {
            date: '2023-11-25',
            name: 'fa ültetés',
            saving: 4 // hany kilo co2-t kot le


        }
    ]
};

function savingsReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_SAVING':
            return {
                savings: [...state.savings, action.data]
            };

        default:
            return state;
    }
}

export default savingsReducer;