import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import {Provider, useDispatch} from "react-redux";
import { store } from "./store/index";

import "assets/css/material-dashboard-react.css?v=1.2.0";

import indexRoutes from "routes/index.jsx";
import {decodeToken} from "./utills/decodeToken";
import {addUser, clearUser} from "./actions/User";

const hist = createBrowserHistory();



ReactDOM.render(
    <Provider store={store}>
    <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
          console.log(prop)
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </Router>
    </Provider>,
  document.getElementById("root")
);
