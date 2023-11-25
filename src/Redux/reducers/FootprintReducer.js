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
        case 'ADD_FOOTPRINT':
            return {
                footprints: [...state.footprints, action.data]
            }
        default:
            return state;
    }
}

export default footprintReducer;