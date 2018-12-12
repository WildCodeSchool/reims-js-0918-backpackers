import React from "react";
import { Route, Switch } from "react-router";
import { Container } from "reactstrap";
import HomePageContainer from "../containers/HomepageContainer";
import Login from "../Login";
import ActivityPage from "../FormPage/ActivityPage";
import ProfileContainer from "../containers/ProfileContainer";
import ActivityContainer from "../containers/ActivityContainer";
import SearchActivity from "../searchPage/SearchActivity";

const routes = (
  <Container fluid>
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route path="/login" component={Login} />
      <Route path="/activities" component={ActivityPage} />
      <Route path="/profil" component={ProfileContainer} />
      <Route path="/activity" component={ActivityContainer} />
      <Route path="/search" component={SearchActivity} />
    </Switch>
  </Container>
);

export default routes;
