import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import combineReducers from '../redux/reducers';

const middlewares = [thunk, logger];

const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;