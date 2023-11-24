const initialState = {
    data: "data"
};

function testReducer(state = initialState, action) {
    switch (action.type) {
        case 'TEST_ACTION':
            return {
                ...state,
                data: action.data
            };

        default:
            return state;
    }
}

export default testReducer;