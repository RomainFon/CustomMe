import {connectRouter} from "connected-react-router";
import {combineReducers} from 'redux'
import {text} from './text';

export default (history) => combineReducers({
    text,
    router: connectRouter(history)
})