import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducer/userReducer';
import chatReducer from './reducer/chatReducer';
import toastReducer from './reducer/toastReducer';
import roomReducer from './reducer/roomReducer';
import socketReducer from './reducer/socketReducer';
const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  userReducer: userReducer,
  chatReducer: chatReducer,
  toastReducer: toastReducer,
  roomReducer: roomReducer,
  socketReducer: socketReducer,
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;
