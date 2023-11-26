// News feed frissitese. Kell a kep linkje, egy cim, datum, hanyan neztek meg

const initialState = {
    feeds: [
        {
            type: "news",
            link: "https://www.earth.com/news/early-nesting-ducks-are-at-risk-from-climate-and-land-use-changes/",
            image: "https://cff2.earth.com/uploads/2023/04/27110625/American-wigeon-960x640.jpg",
            date: '2023-04-27',
            name: 'Early nesting ducks are at risk from climate and land-use changes',
            view_count: '7.5k',
            spend_time: ' Reading time: 4m'
        },
        {
            type: 'news',
            link: 'https://youtu.be/QNv9PRDIhes?si=GOhFEbHlg5y0PM80',
            date: '2023-09-12',
            name: 'Apple introduces huge steps towards becoming carbon neutral',
            image: "https://photos5.appleinsider.com/archive/gallery/14673-10414-12845-7124-12594-6630-Screenshot-2015-04-20-210835-l-l-xl.jpg",
            view_count: '1.2b',
            spend_time: 'Watching time: 5m'
        },
        {
            type: 'ad',
            link: 'https://youtu.be/Soa3gO7tL-c?si=pfdCGr9c5YPQbjKU',
            image: 'https://www.twincities.com/wp-content/uploads/2015/11/20120213__120217wl-GreenDay.jpg?w=525',
            name: 'We are hiring\n@GreenDay, #ForAGreenrPlanet',
            view_count: 'sponsored',
            date: 'Now',
            spend_time: 'Watching time: 5m'
        },   
        {
            type: 'video',
            link: 'https://www.youtube.com/embed/ZWueGZkbxiw',
            name: 'How to Grow Cherries at Home',
            view_count: '94M',
            date: '2022-06-04',
            spend_time: 'Watching time: 1m'
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