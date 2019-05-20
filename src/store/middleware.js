import {createBrowserHistory} from 'history'
import {applyMiddleware, compose, createStore} from 'redux'
import {routerMiddleware} from 'connected-react-router'
import createRootReducer from './reducers'
import thunk from 'redux-thunk'

export const history = createBrowserHistory();

const dataMiddleWare = (store) => (next) => (action) => {
    next(action);

};

export default function middleware(preloadedState) {
    const m = [thunk, dataMiddleWare];
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        createRootReducer(history),
        preloadedState,
        composeEnhancer(
            applyMiddleware(
                routerMiddleware(history),
                ...m
            ),
        ),
    )
}