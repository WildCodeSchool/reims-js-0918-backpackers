import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router";
import { Container } from "reactstrap";
import HomePageContainer from "../containers/HomepageContainer";
import LoginPage from "../LoginPage/LoginPage";
import ProfileContainer from "../containers/ProfileContainer";
import ActivityContainer from "../containers/ActivityContainer";
import SignUpPage from "../SignUpPage/SignUpPage";
import PlaceContainer from "../containers/PlaceContainer";
import ChatContainer from "../containers/ChatContainer";
import CreateActivityPage from "../FormPage/CreateActivityPage";
import CreatePlacePageContainer from "../containers/CreatePlacePageContainer";
import ActivitesListContainer from "../containers/ActivitiesListContainer";
import SearchContainer from "../containers/SearchContainer";
import MentionsLegales from "../MentionsLegales";
import CGU from "../CGU";
import Ikoula from "../Ikoula";

class Routes extends Component {
  render() {
    return (
      <Container fluid>
        {localStorage.getItem("BackpackersToken") ? (
          <Switch>
            <Redirect from="/login" to="/" />
            <Route
              path="/place/:id/newactivity"
              component={CreateActivityPage}
            />
            <Redirect from="/signup" to="/" />
            <Route exact path="/" component={HomePageContainer} />
            <Route path="/activity/:id" component={ActivityContainer} />
            <Route path="/place/:id" component={PlaceContainer} />
            <Route
              path="/place/:id/newactivity"
              component={CreateActivityPage}
            />
            <Route
              path="/profil/:id/activities"
              component={ActivitesListContainer}
            />
            <Route path="/newplace" component={CreatePlacePageContainer} />
            <Route path="/profil/:username" component={ProfileContainer} />
            <Route path="/chatlist" component={ChatContainer} />
            <Route path="/search" component={SearchContainer} />
            <Route path="/mentions" component={MentionsLegales} />
            <Route path="/cgu" component={CGU} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route exact path="/" component={HomePageContainer} />
            <Route path="/activity/:id" component={ActivityContainer} />
            <Route path="/place/:id" component={PlaceContainer} />
            <Route path="/search" component={SearchContainer} />
            <Redirect from="/place/:id/newactivity" to="/login" />
            <Redirect from="/newplace" to="/login" />
            <Redirect from="/profil" to="/login" />
            <Redirect from="/chatlist" to="/login" component={ChatContainer} />
            <Route path="/mentions" component={MentionsLegales} />
            <Route path="/cgu" component={CGU} />
          </Switch>
        )}
        <Ikoula />
      </Container>
    );
  }
}

export default Routes;
