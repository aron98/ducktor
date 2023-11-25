import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import footprintReducer from "./FootprintReducer";
import savingsReducer from './SavingsReducer';

const rootReducer = combineReducers({
    footprintReducer,
    savingsReducer
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;