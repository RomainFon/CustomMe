import {connectRouter} from "connected-react-router";
import {combineReducers} from 'redux'
import {people} from './people';

export default (history) => combineReducers({
    people,
    router: connectRouter(history)
})