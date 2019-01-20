import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";
import "./FormPage.scss";

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.capacity) {
    errors.capacity = "Required";
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
    {touched && (error && <span className="formRequired">{error}</span>)}
  </div>
);

const ActivityForm = props => {
  const { handleSubmit, submitting, uploadFile } = props;
  return (
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
      <h5 className="text-center pt-3 homeUnderline">Votre annonce</h5>
      <div className="mb-5">
        {/* <div>  DON'T TOUCH ! ! ! ! ! !
          <label htmlFor="category">Catégorie</label>
          <Field type="select" name="category" id="Select" component="select">
            <option>Apéritifs</option>
            <option>Aquatique</option>
            <option>Aventure</option>
            <option>Bien-être</option>
            <option>Culturel</option>
            <option>Déplacements</option>
            <option>Enfants</option>url
            <option>Nocturne</option>
            <option>Restauration</option>
          </Field>
        </div> */}

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
              label="participants"
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
