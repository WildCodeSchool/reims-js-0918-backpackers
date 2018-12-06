import React from "react";
import { Route, Switch } from "react-router";
import HomePageContainer from "../containers/HomepageContainer";
import Login from "../Login";
import ActivityPage from "../FormPage/ActivityPage";
import Profile from "../Profile";
import SinglePage from "../SinglePage/SinglePage";

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route path="/login" component={Login} />
      <Route path="/activities" component={ActivityPage} />
      <Route path="/profil" component={Profile} />
      <Route path="/activity" component={SinglePage} />
    </Switch>
  </div>
);

export default routes;
