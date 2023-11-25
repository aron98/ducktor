// News feed frissitese. Kell a kep linkje, egy cim, datum, hanyan neztek meg

const initialState = {
    feeds: [
        {
            type: "news",
            link: "https://www.earth.com/news/early-nesting-ducks-are-at-risk-from-climate-and-land-use-changes/",
            image: "https://cff2.earth.com/uploads/2023/04/27110625/American-wigeon-960x640.jpg",
            date: '2023-04-27',
            name: 'Early nesting ducks are at risk from climate and land-use changes',
            view_count: '7.5k'
        },
        {
            type: 'news',
            link: 'https://youtu.be/Soa3gO7tL-c?si=pfdCGr9c5YPQbjKU',
            date: '2023-09-12',
            name: 'Apple introduces huge steps towards becoming carbon neutral',
            image: "/images/apple_logo.png",
            view_count: '1.2b' 
        },
        {
            type: 'news',
            link: 'https://youtu.be/Soa3gO7tL-c?si=pfdCGr9c5YPQbjKU',
            image: 'https://www.twincities.com/wp-content/uploads/2015/11/20120213__120217wl-GreenDay.jpg?w=525',
            name: 'We are hiring\n@GreenDay, #ForAGreenrPlanet',
            view_count: 'sponsored',
            date: 'Now',
        },   
        {
            type: 'video',
            link: 'https://www.youtube.com/embed/ZWueGZkbxiw',
            name: 'How to Grow Cherries at Home',
            view_count: '94M',
            date: '2022-06-04',
        },
        {
            type: 'news',
            link: 'https://www.nps.gov/yose/index.htm',
            image: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318',
            name: 'Yosemite National Park',
            view_count: '6.3k views',
            date: '2023-11-25',
        },

    ]
};

function feedReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_FEEDS':
            return {
                feeds: [...state.feeds, action.data]
            };
        
            default:
                return state;
    }
}

export default feedReducer;