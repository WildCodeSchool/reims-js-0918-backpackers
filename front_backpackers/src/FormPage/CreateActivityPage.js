import React, { Component, Fragment } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios, { post } from "axios";
import ActivityFormContainer from "./ActivityForm";

class CreateActivityPage extends Component {
  constructor(props) {
    super(props);
    this.file = null;
    this.onChange = this.onChange.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit

    this.fileUpload(this.file).then(res => {
      this.props.history.push("/");
    });
  }
  onChange(e) {
    this.file = e.target.files[0];
  }

  fileUpload(file) {
    const url = "/upload";
    const idActivity = this.props.id;
    const formData = new FormData();
    formData.append("monfichier", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    return post(url, formData, idActivity, config).then(res =>
      this.props.viewForm()
    );
  }

  submit = activities => {
    const activity = { ...activities, id_place: this.props.match.params.id };
    JSON.stringify(activity);
    axios
      .post("http://localhost:3010/activities", activity, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("BackpackersToken")
        }
      })
      .then(response => {
        this.props.idCurrent(response.data);
        this.props.viewUpload();
      });
  };
  render() {
    return (
      <div>
        {!this.props.view && <ActivityFormContainer onSubmit={this.submit} />}
        {this.props.view && (
          <Fragment>
            <Row className="greenHeader text-white">
              <Col xs="2">
                <Link to="/" className="price text-primary">
                  <i className="fas fa-chevron-left text-white" />
                </Link>
              </Col>
              <Col xs="8">
                <p className="text-center mb-0">Publier une annonce</p>
              </Col>
            </Row>
            <h5 className="text-center pt-3 homeUnderline">Votre photo</h5>
            <form onSubmit={e => this.onFormSubmit(e)}>
              <input className="mt-3" type="file" onChange={this.onChange} />
              <button className="mt-3 postBtn" type="submit">
                Upload
              </button>
            </form>
            <Link to="/">
              <button
                onClick={() => this.props.viewForm()}
                className="mt-5 backBtn"
              >
                Retour sur la Page d'accueil
              </button>
            </Link>
          </Fragment>
        )}
      </div>
    );
  }
}

export default CreateActivityPage;
