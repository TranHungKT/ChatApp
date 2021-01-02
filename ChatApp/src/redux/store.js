import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducer/userReducer';
import chatReducer from './reducer/chatReducer';
import toastReducer from './reducer/toastReducer';
import roomReducer from './reducer/roomReducer';
import socketReducer from './reducer/socketReducer';
import friendReducer from './reducer/friendReducer';
import transferReducer from './reducer/transferReducer';
const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
	userReducer: userReducer,
	chatReducer: chatReducer,
	toastReducer: toastReducer,
	roomReducer: roomReducer,
	socketReducer: socketReducer,
	friendReducer: friendReducer,
	transferReducer: transferReducer,
});

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;
