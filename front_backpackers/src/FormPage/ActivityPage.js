import React from "react";
import ActivityFormContainer from "./ActivityForm";

class ActivityPage extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values);
  };
  render() {
    return <ActivityFormContainer onSubmit={this.submit} />;
  }
}

export default ActivityPage;
