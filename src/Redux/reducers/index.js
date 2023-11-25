import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import testReducer from "./TestReducer";
import savingsReducer from './SavingsReducer';

const rootReducer = combineReducers({
    savingsReducer
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;