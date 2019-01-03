import React from "react";
import { Route, Switch } from "react-router";
import { Container } from "reactstrap";
import HomePageContainer from "../containers/HomepageContainer";
import LoginPage from "../LoginPage/LoginPage";
import CreateActivityPage from "../FormPage/CreateActivityPage";
import ProfileContainer from "../containers/ProfileContainer";
import ActivityContainer from "../containers/ActivityContainer";
import SignUpPage from "../SignUpPage/SignUpPage";
import PlaceContainer from "../containers/PlaceContainer";

const routes = (
  <Container fluid>
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route path="/login" component={LoginPage} />
      <Route path="/place/:id/newactivity" component={CreateActivityPage} />
      <Route path="/profil" component={ProfileContainer} />
      <Route path="/activity/:id" component={ActivityContainer} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/place/:id" component={PlaceContainer} />
    </Switch>
  </Container>
);

export default routes;
