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
        <div>
          <label htmlFor="name" />
          <Field
            id="name"
            name="name"
            component="input"
            type="text"
            placeholder="Titre"
            className="field w-100 mt-2"
          />
        </div>
        <div>
          <label htmlFor="id_creator" />
          <Field
            id="id_creator"
            name="id_creator"
            component="input"
            type="text"
            placeholder="Créateur"
            className="field w-100 mt-2"
          />
        </div>
        <div>
          <label htmlFor="id_place" />
          <Field
            id="id_place"
            name="id_place"
            component="input"
            type="text"
            placeholder="Lieu"
            className="field w-100 mt-2"
          />
        </div>
        <div>
          <label htmlFor="description" />
          <Field
            id="decription"
            name="description"
            component="textarea"
            type="text"
            placeholder="Description"
            className="field w-100 mt-2"
          />
        </div>
        <div>
          <label htmlFor="capacity" />
          <Field
            id="capacity"
            name="capacity"
            component="input"
            type="text"
            placeholder="participants"
            className="field width mt-2"
          />
        </div>
        <div>
          <Field
            id="price"
            type="text"
            name="price"
            component="input"
            placeholder="Prix"
            className="field width mt-2"
          />
          <label htmlFor="price">€</label>
        </div>
        {/* <div>  DON'T TOUCH ! ! ! ! ! ! ! ! !
          <label htmlFor="photos">Photos</label>
          <Field type="file" name="file" id="File" component="input" />
        </div> */}
        <button type="submit" className="header cursor">
          Publier l'annonce
        </button>
      </div>
    </form>
  );
};

const ActivityFormContainer = reduxForm({
  form: "createActivity"
})(ActivityForm);

export default ActivityFormContainer;
