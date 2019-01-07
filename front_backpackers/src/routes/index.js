import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router";
import { Container } from "reactstrap";
import HomePageContainer from "../containers/HomepageContainer";
import UploadFiles from "../FormPage/UploadFiles";
import LoginPage from "../LoginPage/LoginPage";
import CreateActivityPage from "../FormPage/CreateActivityPage";
import ProfileContainer from "../containers/ProfileContainer";
import ActivityContainer from "../containers/ActivityContainer";
import SignUpPage from "../SignUpPage/SignUpPage";
import PlaceContainer from "../containers/PlaceContainer";
import ChatContainer from "../containers/ChatContainer";

class Routes extends Component {
  render() {
    return (
      <Container fluid>
        {localStorage.getItem('BackpackersToken') ?
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route exact path="/" component={HomePageContainer} />
            <Route path="/activity/:id" component={ActivityContainer} />
            <Route path="/place/:id" component={PlaceContainer} />
            <Route path="/place/:id/newactivity" component={CreateActivityPage} />
            <Route path="/profil" component={ProfileContainer} />
            <Route path="/upload" component={UploadFiles} />
            <Route path="/chatlist" component={ChatContainer} />
          </Switch>
          :
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route exact path="/" component={HomePageContainer} />
            <Route path="/activity/:id" component={ActivityContainer} />
            <Route path="/place/:id" component={PlaceContainer} />
            <Redirect from="/place/:id/newactivity" to="/login" />
            <Redirect from="/profil" to="/login" />
            <Redirect from="/upload" to="/login" component={UploadFiles} />
            <Redirect from="/chatlist" to="/login" component={ChatContainer} />
          </Switch>
        }
      </Container>
    )
  }
}

export default Routes;
