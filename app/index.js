import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "./store";

import "./common/stylesheets/helpers/_index.styl";
import "./common/stylesheets/settings/_index.styl";
import "./common/stylesheets/tools/_index.styl";

import { Component as Application } from "./modules/application";

ReactDom.render(
	<Provider store={store}>
		<Router>
			<Route component={props =>  <Application {...props} />}/>
		</Router>
	</Provider>,
	document.getElementById("root")
);
