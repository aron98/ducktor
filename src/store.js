import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import persistedReducer from "./Redux/reducers";
import {persistStore} from "redux-persist"; // You'll create this next

const initialState = {};

const middleware = [thunk];

export const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(...middleware)
);

export const persistor = persistStore(store);