import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";
import { toast } from "react-toastify";
import "./FormPage.scss";

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Veuillez entrer un nom valide !";
  }
  if (!values.capacity) {
    errors.capacity = "Veuillez entrer un nombre de places !";
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <Input
      {...input}
      placeholder={label}
      type={type}
      className="field w-100 mt-2"
    />
    {touched &&
      (error &&
        toast.error(`${error}`, {
          position: toast.POSITION.BOTTOM_CENTER
        }),
      "")}
  </div>
);

const ActivityForm = props => {
  const { handleSubmit, submitting, uploadFile } = props;
  return (
    <Fragment>
      <Row className="greenHeader text-white">
        <Col xs="2">
          <button onClick={() => props.goBack()} className="price text-primary">
            <i className="fas fa-chevron-left text-white" />
          </button>
        </Col>
        <Col xs="8">
          <p className="text-center mb-0">Publier une annonce</p>
        </Col>
      </Row>
      <h5 className="text-center pt-3 homeUnderline">Votre annonce</h5>
      <div className="mb-5">
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              id="name"
              name="name"
              component={renderField}
              type="text"
              label="Titre"
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
              id="capacity"
              name="capacity"
              component={renderField}
              type="number"
              label="Participants"
            />
            <Field
              id="eventDate"
              name="eventDate"
              component={renderField}
              type="date"
              label="date"
            />
            <Field
              id="eventTime"
              name="eventTime"
              component={renderField}
              type="time"
              label="time"
            />
            <Field
              id="price"
              type="number"
              name="price"
              component={renderField}
              label="Prix"
            />
          </div>
          <h5 className="text-center pt-3 homeUnderline">Votre photo</h5>
          <input className="mt-3" type="file" onChange={e => uploadFile(e)} />

          <button type="submit" disabled={submitting} className="mt-3 postBtn">
            Créer l'activité
          </button>
        </form>
      </div>
    </Fragment>
  );
};

const ActivityFormContainer = reduxForm({
  form: "createActivity",
  validate
})(ActivityForm);

export default ActivityFormContainer;
