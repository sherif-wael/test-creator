import React, {Fragment} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import PrivateRoute from "./PrivateRoute"
import Home from "../layout/Home"
import Test from "../test/Test"
import CreateTestPage from "../createTest/CreateTest";
import Dashboard from "../dashboard/Dashboard"
import ErrorNotFound from "../error404/Error404"

const Routes = () => {
    return <Fragment>
            <Switch>
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route exact path="/" component={Home} />
              <Route exact path="/test/:id" component={Test} />
              <PrivateRoute path="/create" component={CreateTestPage} />
              <Route component={ErrorNotFound} /> 
            </Switch>
         </Fragment>
}

export default Routes