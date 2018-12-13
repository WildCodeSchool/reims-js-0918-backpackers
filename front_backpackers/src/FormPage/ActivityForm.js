import React from "react";
import { Row, Col, Button, Container } from "reactstrap";
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
  if (!values.id_creator) {
    errors.id_creator = "Required";
  }
  if (!values.capacity) {
    errors.capacity = "Required";
  }
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
    <Container fluid className="p-0 formContainer">
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
      <h5 className="text-center publicationUnderline mt-2">Votre annonce</h5>
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

        <form
          method="POST"
          encType="multipart/form-data"
          action="upload"
          onSubmit={handleSubmit}
        >
          <div>
            <Field
              id="name"
              name="name"
              component={renderField}
              type="text"
              label="Titre"
            />
            <Field
              id="id_creator"
              name="id_creator"
              component={renderField}
              type="number"
              label="Créateur"
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
              rows="4"
            />
            <Field
              id="capacity"
              name="capacity"
              component={renderField}
              type="number"
              label="Participants"
            />
            <Field
              id="price"
              type="number"
              name="price"
              component={renderField}
              label="Prix"
            />
            <input
              type="file"
              name="picture"
              multiple
              className="uploadFile mt-2"
              accept="image/png"
            />
          </div>
          <Button
            type="submit"
            disabled={submitting}
            className="submitButton mt-5 cursor"
          >
            Publier
          </Button>
        </form>
      </div>
    </Container>
  );
};

const ActivityFormContainer = reduxForm({
  form: "createActivity",
  validate
})(ActivityForm);

export default ActivityFormContainer;
