import React from "react";
import { Route, Switch } from "react-router";
import HomePageContainer from "../containers/HomepageContainer";
import Login from "../Login";

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route path="/login" component={Login} />
    </Switch>
  </div>
);

export default routes;
