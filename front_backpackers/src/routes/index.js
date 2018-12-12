import React from "react";
import { Route, Switch } from "react-router";
import { Container } from "reactstrap";
import HomePageContainer from "../containers/HomepageContainer";
import Login from "../Login";
import ActivityPage from "../FormPage/ActivityPage";
import SinglePage from "../SinglePage/SinglePage";
import ProfileContainer from "../containers/ProfileContainer";

const routes = (
  <Container fluid>
    <Switch>
      <Route exact path="/homepage" component={HomePageContainer} />
      <Route path="/" component={Login} />
      <Route path="/activities" component={ActivityPage} />
      <Route path="/profil" component={ProfileContainer} />
      <Route path="/activity" component={SinglePage} />
    </Switch>
  </Container>
);

export default routes;
