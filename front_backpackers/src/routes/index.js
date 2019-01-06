import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router";
import { Container } from "reactstrap";
import HomePageContainer from "../containers/HomepageContainer";
import LoginPage from "../LoginPage/LoginPage";
import CreateActivityPage from "../FormPage/CreateActivityPage";
import ProfileContainer from "../containers/ProfileContainer";
import ActivityContainer from "../containers/ActivityContainer";
import SignUpPage from "../SignUpPage/SignUpPage";
import PlaceContainer from "../containers/PlaceContainer";

class Routes extends Component {
  render() {
    return (
      <Container fluid>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route exact path="/" component={HomePageContainer} />
          <Route path="/activity/:id" component={ActivityContainer} />
          <Route path="/place/:id" component={PlaceContainer} />
          {!localStorage.getItem('BackpackersToken') ?
            <Fragment>
              <Redirect from="/place/:id/newactivity" to="/login" />
              <Redirect from="/profil" to="/login" />
            </Fragment>
            :
            <Fragment>
              <Route path="/place/:id/newactivity" component={CreateActivityPage} />
              <Route path="/profil" component={ProfileContainer} />
            </Fragment>
          }
        </Switch>
      </Container>
    )
  }
}

export default Routes;
