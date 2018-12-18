import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import "./FormPage.css";

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.id_place) {
    errors.id_place = "Required";
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

const ActivityForm = props => {
  const { handleSubmit, submitting } = props;

  return (
    <Fragment>
      <Row className="header">
        <Col xs="2">
          <Link to="/" className="price text-primary">
            <i className="fas fa-chevron-left text-white" />
          </Link>
        </Col>
        <Col xs="8">
          <p className="text-center mb-0">Publier une annonce</p>
        </Col>
      </Row>
      <h5 className="text-center publicationUnderline">Votre annonce</h5>
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
            <option>Enfants</option>
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
              id="id_place"
              name="id_place"
              component={renderField}
              type="number"
              label="Lieu"
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
              id="price"
              type="number"
              name="price"
              component={renderField}
              label="Prix"
            />
          </div>
          <button type="submit" disabled={submitting} className="header cursor">
            Publier l'annonce
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
