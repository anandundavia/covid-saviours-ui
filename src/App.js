// @ts-check
import React from "react";
import { Provider } from "react-redux";
import Button from "@material-ui/core/Button";

import { ConnectedRouter } from "connected-react-router";
import { Route, Switch, Redirect } from "react-router";

import { store, history } from "./reducers";

import FindSaviour from "./pages/FindSaviour/FindSaviour";

import "./App.css";

function App() {
	return (
		<Provider store={store}>
			<div className="app-container">
				<ConnectedRouter history={history}>
					<Switch>
						<Route exact path="/find" component={FindSaviour} />
						<Redirect from="**" to="/find" />
					</Switch>
				</ConnectedRouter>
				<Button variant="contained" color="primary">
					Hello World
				</Button>
			</div>
		</Provider>
	);
}

export default App;
