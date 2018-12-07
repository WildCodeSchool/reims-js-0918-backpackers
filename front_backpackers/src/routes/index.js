import React from "react";
import { Route, Switch } from "react-router";
import { Container } from "reactstrap";
import HomePageContainer from "../containers/HomepageContainer";
import Login from "../Login";
import ActivityPage from "../FormPage/ActivityPage";
import Profile from "../Profile";
import SinglePage from "../SinglePage/SinglePage";

const routes = (
  <Container fluid>
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route path="/login" component={Login} />
      <Route path="/activities" component={ActivityPage} />
      <Route path="/profil" component={Profile} />
      <Route path="/activity" component={SinglePage} />
    </Switch>
  </Container>
);

export default routes;
