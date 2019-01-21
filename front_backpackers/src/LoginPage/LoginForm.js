import React from "react";
import { Field, reduxForm } from "redux-form";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./Login.scss";

const validate = values => {
  const errors = {};
  if (!values.mail) {
    errors.mail = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail)) {
    errors.mail = "Invalid mail adress";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type} className="mt-3 mb-2" />
      {touched && (error && <span className="formRequired">{error}</span>)}
    </div>
  </div>
);

const LoginForm = props => {
  const { handleSubmit, submitting } = props;
  return (
    <div className="loginBackground">
      <Row>
        <Col xs="12">
          <h1 className="text-center my-3">Se connecter</h1>
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
                name="mail"
                type="email"
                component={renderField}
                label="Mail"
              />
              <Field
                name="password"
                type="password"
                component={renderField}
                label="Password"
              />
            </div>
            <div>
              <button
                className="login d-block text-white text-center"
                type="submit"
                disabled={submitting}
              >
                Se connecter
              </button>
            </div>
          </form>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 8, offset: 2 }}>
          <Button className="facebookLogin">Facebook</Button>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 8, offset: 2 }}>
          <Link to="/">
            <Button className="nologed">Mode invité</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <p className="newAccount mt-5 text-white text-center">
            Je n'ai pas de compte.<Link to="/signup">Créer un compte</Link>
          </p>
        </Col>
      </Row>
    </div>
  );
};

const LoginFormContainer = reduxForm({
  form: "login",
  validate
})(LoginForm);

export default LoginFormContainer;
