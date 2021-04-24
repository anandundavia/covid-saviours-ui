// @ts-check
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import uiReducer from "./ui.reducer";

export const history = createBrowserHistory();

const allReducers = combineReducers({
	ui: uiReducer,
	router: connectRouter(history)
});

const initialState = {};

const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export const store = createStore(allReducers, initialState, composedEnhancers);
