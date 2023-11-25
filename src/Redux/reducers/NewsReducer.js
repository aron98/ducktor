// News feed frissitese. Kell a kep linkje, egy cim, datum, hanyan neztek meg

const initialState = {
    news: [
        {
            type: "news",
            link: "https://www.earth.com/news/early-nesting-ducks-are-at-risk-from-climate-and-land-use-changes/",
            image: "https://cff2.earth.com/uploads/2023/04/27110625/American-wigeon-960x640.jpg",
            date: '2023-04-27',
            name: 'Early nesting ducks are at risk from climate and land-use changes',
            view_count: '7.5k'
        },
        {
            type: 'video',
            link: 'https://www.youtube.com/embed/ZWueGZkbxiw',
            name: 'How to Grow Cherries at Home',
            view_count: '94M',
            date: '2022-06-04',
        }
    ]
};

function newsReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_NEWS':
            return {
                news: [...state.news, action.data]
            };
        
            default:
                return state;
    }
}

export default newsReducer;