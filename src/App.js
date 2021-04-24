// @ts-check
import React from "react";
import { Provider } from "react-redux";

import { ConnectedRouter } from "connected-react-router";
import { Route, Switch, Redirect } from "react-router";

import { store, history } from "./reducers";

import AppHeader from "./components/AppHeader/AppHeader";
import FindSaviour from "./pages/FindSaviour/FindSaviour";

import "./App.css";

function App() {
	return (
		<Provider store={store}>
			<div className="app-container">
				<AppHeader />
				<ConnectedRouter history={history}>
					<Switch>
						<Route exact path="/find" component={FindSaviour} />
						<Redirect from="**" to="/find" />
					</Switch>
				</ConnectedRouter>
			</div>
		</Provider>
	);
}

export default App;
