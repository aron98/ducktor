import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import footprintReducer from "./FootprintReducer";
import savingsReducer from './SavingsReducer';
import newsReducer from './NewsReducer';
import settingsReducer from "./SettingsReducer";

const rootReducer = combineReducers({
    footprintReducer,
    savingsReducer,
    newsReducer,
    settingsReducer
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;