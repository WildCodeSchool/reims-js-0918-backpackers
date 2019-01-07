import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import "../LoginPage/Login.scss";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <input {...input} placeholder={label} type={type} className="mt-3 mb-2" />
    {touched && (error && <span className="formRequired">{error}</span>)}
  </div>
);

const SignUpForm = props => {
  const { handleSubmit, submitting } = props;

  return (
    <div className="signUpBackground">
      <Fragment>
        <Row>
          <Col xs="12">
            <h1 className="text-center my-3">Créer un compte</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={{ size: 6, offset: 3 }}>
            <img
              className="w-100 my-4"
              src={require("../images/Logo-Backpackers.png")}
              alt="Logo Backpackers"
            />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <form onSubmit={handleSubmit}>
              <div className="formBack">
                <Field
                  id="username"
                  name="username"
                  component={renderField}
                  type="text"
                  label="Pseudo"
                />
                <Field
                  id="birthDate"
                  name="birthDate"
                  component={renderField}
                  type="date"
                  label="Date de naissance"
                />
                <Field
                  id="mail"
                  name="mail"
                  component={renderField}
                  type="text"
                  label="Adresse email"
                />
                <Field
                  id="password"
                  name="password"
                  component={renderField}
                  type="password"
                  label="Mot de passe"
                />
              </div>
              <div>
                <button
                  className="signup d-block text-white text-center"
                  type="submit"
                  disabled={submitting}
                >
                  S'enregistrer
                </button>
              </div>
            </form>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <p className="Account mt-5 text-center text-white">
              J'ai déjà un compte.<Link to="/login">Se connecter</Link>
            </p>
          </Col>
        </Row>
      </Fragment>
    </div>
  );
};

const SignUpFormContainer = reduxForm({
  form: "createSignUp"
})(SignUpForm);

export default SignUpFormContainer;
