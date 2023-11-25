import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import footprintReducer from "./FootprintReducer";
import savingsReducer from './SavingsReducer';
import feedReducer from './FeedReducer';
import settingsReducer from "./SettingsReducer";

const rootReducer = combineReducers({
    footprintReducer,
    savingsReducer,
    feedReducer,
    settingsReducer
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;