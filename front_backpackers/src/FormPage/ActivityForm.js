import React from "react";
import { Row, Col } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import "./FormPage.css";

const ActivityForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Row className="header">
        <Col xs="2">
          <p className="price text-primary">
            <i className="fas fa-chevron-left" />
          </p>
        </Col>
        <Col xs="8">
          <p className="text-center">Publier une annonce</p>
        </Col>
      </Row>
      <h5>Votre annonce</h5>
      <div className="mb-5">
        <div>
          <label htmlFor="category">Catégorie</label>
          <Field type="select" name="select" id="Select" component="select">
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
        </div>
        <div>
          <label htmlFor="Title">Titre</label>
          <Field name="Title" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="Text">Description</label>
          <Field name="Description" component="input" type="text" />
        </div>
        <div>
          <Field
            type="text"
            name="price"
            component="input"
            placeholder="Prix"
          />
          <label htmlFor="Price">€</label>
        </div>
        <div>
          <label htmlFor="photos">Photos</label>
          <Field type="file" name="file" id="File" component="input" />
        </div>
        <button type="submit">Publier l'annonce</button>
      </div>
    </form>
  );
};

const ActivityFormContainer = reduxForm({
  // a unique name for the form
  form: "createActivity"
})(ActivityForm);

export default ActivityFormContainer;
