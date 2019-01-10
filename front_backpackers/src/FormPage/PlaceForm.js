import React, { Component, Fragment } from "react";
import { Row, Col } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import "./FormPage.scss";
import MapPlaceCreation from "./MapPlaceCreation";

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.type) {
    errors.type = "Required";
  }
  if (!values.description) {
    errors.description = "Required";
  }
  if (!values.price) {
    errors.price = "Required";
  }
  console.log(errors);
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <input
      {...input}
      placeholder={label}
      type={type}
      className="field w-100 mt-2"
    />
    {touched && (error && <span className="formRequired">{error}</span>)}
  </div>
);

class PlaceForm extends Component {
  render() {
    return (
      <Fragment>
        <Row className="greenHeader text-white">
          <Col xs="2">
            <Link to="/" className="price text-primary">
              <i className="fas fa-chevron-left text-white" />
            </Link>
          </Col>
          <Col xs="8">
            <p className="text-center mb-0">Ajouter un lieu</p>
          </Col>
        </Row>
        <h2 className="pt-3">Votre annonce</h2>
        <div className="activitiesTitleUnderline mb-3 w-100" />

        <div className="mb-5">

          <form onSubmit={this.props.handleSubmit}>
            <div>
              <Field type="select" name="type" id="type" component="select" label="Type">
                <option>Catégorie</option>
                <option value="Apéritifs">Apéritifs</option>
                <option value="Aquatique">Aquatique</option>
                <option value="Aventure">Aventure</option>
                <option value="Bien-être">Bien-être</option>
                <option value="Culturel">Culturel</option>
                <option value="Déplacements">Déplacements</option>
                <option value="Enfants">Enfants</option>
                <option value="Nocturne">Nocturne</option>
                <option value="Restauration">Restauration</option>
              </Field>
            </div>
            <div>
              <Field
                id="name"
                name="name"
                component={renderField}
                type="text"
                label="Nom du lieu"
              />
              <Field
                id="decription"
                name="description"
                component="textarea"
                type="text"
                placeholder="Description"
                className="field w-100 mt-2"
              />
              <Field
                id="price"
                type="number"
                name="price"
                component={renderField}
                label="Prix"
              />

              <h2 className="pt-3">Localisation</h2>
              <div className="activitiesTitleUnderline mb-3 w-100" />

              {this.props.position.length !== 2 ?
                "" :
                <div className="mapForm">
                  <MapPlaceCreation center={this.props.position} getAddress={this.props.getAddress} />
                </div>
              }

            </div>

            <h5 className="text-center pt-3 homeUnderline">Votre photo</h5>
            <input className="mt-3" type="file" onChange={e => this.props.uploadFile(e)} />

            <button type="submit" disabled={this.props.submitting} className="mt-3 postBtn">
              Créer le lieu
          </button>
          </form>
        </div>
      </Fragment>
    );
  }
};

const PlaceFormContainer = reduxForm({
  form: "createPlace",
  validate
})(PlaceForm);

export default PlaceFormContainer