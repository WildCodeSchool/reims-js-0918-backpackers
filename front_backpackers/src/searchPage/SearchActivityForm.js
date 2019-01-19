import React, { Component, Fragment } from "react";
import { Row, Col, Input, Button, Collapse, Badge, Label } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import "./SearchPage.scss";

const renderField = ({
  input,
  placeholder,
  name,
  className,
  id,
  ref,
  value,
  type,
  meta: { touched, error, warning }
}) => (
  <Fragment>
    <Input
      value={value}
      placeholder={placeholder}
      id={id}
      name={name}
      className={className}
      ref={ref}
      {...input}
      type={type}
    />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </Fragment>
);

class SearchActivityForm extends Component {
  constructor(props) {
    super(props);
    this.addCount = this.addCount.bind(this);
    this.removeCount = this.removeCount.bind(this);
    this.state = {
      count: this.props.placeNumberValue ? this.props.placeNumberValue : 1,
      searchCollapse: {
        collapseCategories: true,
        collapseParticipants: false,
        collapseDates: false,
        collapsedAdvanced: true
      }
    };
  }

  componentDidUpdate(prevState) {
    if (prevState.count !== this.state.count) {
      this.props.change("placeNumber", this.state.count);
    }
  }

  addCount() {
    this.setState({ count: this.state.count + 1 });
  }

  removeCount() {
    if (this.state.count > 1) {
      this.setState({ count: this.state.count - 1 });
    }
  }

  clickSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.props.handleSubmit}>
          {/* TYPE SELECTION */}
          <Row className="my-2">
            <Col
              onClick={() => this.props.toggleCategories()}
              className={`${!this.props.collapseCategories ? "selected" : ""}`}
            >
              <h2
                className={`pr-3 ${
                  !this.props.collapseCategories ? "selected" : ""
                }`}
              >
                {!this.props.collapseCategories ? (
                  <i className="pr-2 far fa-circle" />
                ) : (
                  <i className="pr-2 far fa-check-circle" />
                )}
                Catégories
              </h2>
              <div className="activitiesTitleUnderline mb-3 w-100" />
            </Col>
          </Row>
          <Collapse isOpen={this.props.collapseCategories}>
            <Row className="text-center typeList">
              <Col xs="4">
                <Field
                  component={renderField}
                  type="radio"
                  id="aventure"
                  name="typeChoice"
                  value="aventure"
                />
                <Label className="typeChoice" for="aventure">
                  <img
                    className="categoriesSearch"
                    src="images/aventure.png"
                    alt="categoriesIMG"
                  />
                  <p>Aventure</p>
                </Label>
              </Col>
              <Col xs="4">
                <Field
                  component={renderField}
                  type="radio"
                  id="aquatic"
                  name="typeChoice"
                  value="aquatique"
                />
                <Label className="typeChoice" for="aquatic">
                  <img
                    className="categoriesSearch"
                    src="images/aquatic.png"
                    alt="categoriesIMG"
                  />
                  <p>Aquatique</p>
                </Label>
              </Col>
              <Col xs="4">
                <Field
                  component={renderField}
                  type="radio"
                  id="culturel"
                  name="typeChoice"
                  value="culturel"
                />
                <Label className="typeChoice" for="culturel">
                  <img
                    className="categoriesSearch"
                    src="/images/culturel.png"
                    alt="categoriesIMG"
                  />
                  <p>Culturel</p>
                </Label>
              </Col>
              <Col xs="4">
                <Field
                  component={renderField}
                  type="radio"
                  id="deplacement"
                  name="typeChoice"
                  value="deplacement"
                />
                <Label className="typeChoice" for="deplacement">
                  <img
                    className="categoriesSearch"
                    src="/images/deplacement.png"
                    alt="categoriesIMG"
                  />
                  <p>Déplacements</p>
                </Label>
              </Col>
              <Col xs="4">
                <Field
                  component={renderField}
                  type="radio"
                  id="restauration"
                  name="typeChoice"
                  value="restauration"
                />
                <Label className="typeChoice" for="restauration">
                  <img
                    className="categoriesSearch"
                    src="/images/restauration.png"
                    alt="categoriesIMG"
                  />
                  <p>Restauration</p>
                </Label>
              </Col>
              <Col xs="4">
                <Field
                  component={renderField}
                  type="radio"
                  id="aperitif"
                  name="typeChoice"
                  value="aperitif"
                />
                <Label className="typeChoice" for="aperitif">
                  <img
                    className="categoriesSearch"
                    src="/images/aperitif.png"
                    alt="categoriesIMG"
                  />
                  <p>Apéritifs</p>
                </Label>
              </Col>
              <Col xs="4">
                <Field
                  component={renderField}
                  type="radio"
                  id="nocturne"
                  name="typeChoice"
                  value="nocturne"
                />
                <Label className="typeChoice" for="nocturne">
                  <img
                    className="categoriesSearch"
                    src="/images/nocturne.png"
                    alt="categoriesIMG"
                  />
                  <p>Nocturne</p>
                </Label>
              </Col>
              <Col xs="4">
                <Field
                  component={renderField}
                  type="radio"
                  id="bien-etre"
                  name="typeChoice"
                  value="bien-etre"
                />
                <Label className="typeChoice" for="bien-etre">
                  <img
                    className="categoriesSearch"
                    src="/images/bien-etre.png"
                    alt="categoriesIMG"
                  />
                  <p>Bien-être</p>
                </Label>
              </Col>
              <Col xs="4">
                <Field
                  component={renderField}
                  type="radio"
                  id="enfants"
                  name="typeChoice"
                  value="enfants"
                />
                <Label className="typeChoice" for="enfants">
                  <img
                    className="categoriesSearch"
                    src="/images/enfants.png"
                    alt="categoriesIMG"
                  />
                  <p>Enfants</p>
                </Label>
              </Col>
            </Row>
          </Collapse>
          <Row>
            <Col
              onClick={() => this.props.toggleParticipants()}
              className={`${
                !this.props.collapseParticipants ? "selected" : ""
              }`}
            >
              <h2
                className={`pr-3 ${
                  !this.props.collapseParticipants ? "selected" : ""
                }`}
              >
                {!this.props.collapseParticipants ? (
                  <i className="pr-2 far fa-circle" />
                ) : (
                  <i className="pr-2 far fa-check-circle" />
                )}
                Participants
              </h2>
              <div className="activitiesTitleUnderline mb-3 w-100" />
            </Col>
          </Row>
          <Collapse isOpen={this.props.collapseParticipants}>
            <Row className="my-2">
              <Col xs="4">
                <Button
                  onClick={() => this.removeCount()}
                  className="text-center mb-0"
                >
                  -
                </Button>
              </Col>
              <Col xs="4">
                <Field
                  component={renderField}
                  name="placeNumber"
                  type="number"
                  id="placeNumber"
                  input={{ readOnly: true, value: this.state.count }}
                />
              </Col>
              <Col xs="4">
                <Button
                  onClick={() => this.addCount()}
                  className="text-center mb-0"
                >
                  +
                </Button>
              </Col>
            </Row>
          </Collapse>
          <Row>
            <Col
              onClick={() => this.props.toggleDates()}
              className={`${!this.props.collapseDates ? "selected" : ""}`}
            >
              <h2
                className={`pr-3 ${
                  !this.props.collapseDates ? "selected" : ""
                }`}
              >
                {!this.props.collapseDates ? (
                  <i className="pr-2 far fa-circle" />
                ) : (
                  <i className="pr-2 far fa-check-circle" />
                )}
                Dates
              </h2>
              <div className="activitiesTitleUnderline mb-3 w-100" />
            </Col>
          </Row>
          <Collapse isOpen={this.props.collapseDates}>
            <Row className="my-2">
              <Col xs="5">
                <Badge className="badgeDate">A partir du ...</Badge>
              </Col>
              <Col xs="7">
                <Field
                  component={renderField}
                  className="search-bar"
                  name="dateStart"
                  type="date"
                />
              </Col>
            </Row>
            <Row className="my-2">
              <Col xs="5">
                <Badge className="badgeDate">Jusqu'au</Badge>
              </Col>
              <Col xs="7">
                <Field
                  component={renderField}
                  className="search-bar"
                  name="dateEnd"
                  type="date"
                />
              </Col>
            </Row>
          </Collapse>
          <Row>
            <Col
              onClick={() => this.props.toggleAdvanced()}
              className={`${!this.props.collapseAdvanced ? "selected" : ""}`}
            >
              <h2
                className={`pr-3 ${
                  !this.props.collapseAdvanced ? "selected" : ""
                }`}
              >
                {!this.props.collapseAdvanced ? (
                  <i className="pr-2 far fa-circle" />
                ) : (
                  <i className="pr-2 far fa-check-circle" />
                )}
                Affiner la recherche
              </h2>
              <div className="activitiesTitleUnderline mb-3 w-100" />
            </Col>
          </Row>
          <Collapse isOpen={this.props.collapseAdvanced}>
            <Row className="my-2">
              <Col>
                <Field
                  type="text"
                  component={renderField}
                  name="keywords"
                  className="search-bar"
                  placeholder="Mot-clé"
                />
              </Col>
            </Row>
            <Row className="my-2">
              <Col>
                <Field
                  type="text"
                  component={renderField}
                  name="country"
                  className="search-bar"
                  placeholder="Pays"
                />
              </Col>
            </Row>
            <Row className="my-2">
              <Col>
                <Field
                  type="text"
                  component={renderField}
                  name="city"
                  className="search-bar"
                  placeholder="Ville"
                />
              </Col>
            </Row>
          </Collapse>
          <Row>
            <Col xs="8">
              <button
                type="submit"
                disabled={this.props.submitting}
                className="search-btn mt-4"
              >
                Rechercher <i className="fas fa-search" />
              </button>
            </Col>
            <Col xs="4">
              <button
                type="button"
                onClick={() => (this.props.emptyForm(), this.props.reset())}
                disabled={this.props.submitting}
                className="resetBtn mt-4"
              >
                <i className="fas fa-eraser" />
              </button>
            </Col>
          </Row>
        </form>
      </Fragment>
    );
  }
}

SearchActivityForm = reduxForm({
  form: "searchActivities"
})(SearchActivityForm);

SearchActivityForm = connect(state => ({
  initialValues: state.search.searchData.placeNumber
    ? state.search.searchData
    : {
        dateStart: new Date()
          .toLocaleDateString()
          .split("/")
          .reverse()
          .join("-"),
        placeNumber: 1
      },
  enableReinitialize: true
}))(SearchActivityForm);

export default SearchActivityForm;
