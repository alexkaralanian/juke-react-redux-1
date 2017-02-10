import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/root-reducer';
import {createLogger} from 'redux-logger';
const logger = createLogger();
const middleware = applyMiddleware(logger);


export default createStore(reducer, middleware);
