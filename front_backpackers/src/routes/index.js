import React from "react";
import { Route, Switch } from "react-router";
import { Container } from "reactstrap";
import UploadFiles from "../FormPage/UploadFiles";
import LoginPage from "../LoginPage/LoginPage";
import ActivityPage from "../FormPage/ActivityPage";
import ProfileContainer from "../containers/ProfileContainer";
import ActivityContainer from "../containers/ActivityContainer";

const routes = (
  <Container fluid>
    <Switch>
      <Route exact path="/" component={UploadFiles} />
      <Route path="/login" component={LoginPage} />
      <Route path="/activities" component={ActivityPage} />
      <Route path="/profil" component={ProfileContainer} />
      <Route path="/activity/:id" component={ActivityContainer} />
    </Switch>
  </Container>
);

export default routes;
