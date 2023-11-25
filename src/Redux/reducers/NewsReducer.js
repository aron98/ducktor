// News feed frissitese. Kell a kep linkje, egy cim, datum, hanyan neztek meg

const initialState = {
    news: [
        {
            date: '2023-09-12',
            name: 'Apple introduces huge steps towards becoming carbon neutral',
            image: "https://www.macworld.com/wp-content/uploads/2023/08/apple-wonderlust-event-iphone-15-3.jpg?resize=2048%2C1365&quality=50&strip=all",
            view_count: 2024256128
        },
        {
        image: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318',
        name: 'Yosemite National Park',
        view_count: '6.3k views',
        date: '2023-11-25',
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