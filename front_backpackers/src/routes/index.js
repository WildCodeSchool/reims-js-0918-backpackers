import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router";
import { Container } from "reactstrap";
import HomePageContainer from "../containers/HomepageContainer";
import LoginPage from "../LoginPage/LoginPage";
import UploadContainer from "../containers/UploadContainer";
import ProfileContainer from "../containers/ProfileContainer";
import ActivityContainer from "../containers/ActivityContainer";
import SignUpPage from "../SignUpPage/SignUpPage";
import PlaceContainer from "../containers/PlaceContainer";
import ChatContainer from "../containers/ChatContainer";
import CreateActivityPage from "../FormPage/CreateActivityPage";
import CreatePlacePageContainer from "../containers/CreatePlacePageContainer";
import SearchActivity from "../searchPage/SearchActivity";
import searchParticipantsContainer from "../containers/searchParticipantsContainer";

class Routes extends Component {
  render() {
    return (
      <Container fluid>
        {localStorage.getItem("BackpackersToken") ? (
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/place/:id/newactivity" component={UploadContainer} />
            <Route path="/signup" component={SignUpPage} />
            <Route exact path="/" component={HomePageContainer} />
            <Route path="/activity/:id" component={ActivityContainer} />
            <Route path="/place/:id" component={PlaceContainer} />
            <Route path="/place/:id/newactivity" component={CreateActivityPage} />
            <Route path="/newplace" component={CreatePlacePageContainer} />
            <Route path="/profil" component={ProfileContainer} />
            <Route path="/chatlist" component={ChatContainer} />
            <Route path="/search" component={searchParticipantsContainer} />
          </Switch>
        ) : (
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignUpPage} />
              <Route exact path="/" component={HomePageContainer} />
              <Route path="/activity/:id" component={ActivityContainer} />
              <Route path="/place/:id" component={PlaceContainer} />
              <Route path="/search" component={SearchActivity} />
              <Redirect from="/place/:id/newactivity" to="/login" />
              <Redirect from="/newplace" to="/login" />
              <Redirect from="/profil" to="/login" />
              <Redirect from="/chatlist" to="/login" component={ChatContainer} />
            </Switch>
          )}
      </Container>
    );
  }
}

export default Routes;
