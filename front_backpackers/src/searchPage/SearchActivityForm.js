import React, { Component, Fragment } from "react";
import { Row, Col, Input, Button, Collapse, Badge, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { Field, reduxForm } from 'redux-form'
import "./SearchPage.scss";

const renderField = ({ input, placeholder, name, className, id, type, meta: { touched, error, warning } }) => (
  <Fragment>
    <Input placeholder={placeholder} id={id} name={name} className={className} {...input} type={type} />
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </Fragment>
)

class SearchActivityForm extends Component {
  constructor(props) {
    super(props);
    this.toggleCategories = this.toggleCategories.bind(this);
    this.toggleParticipants = this.toggleParticipants.bind(this);
    this.toggleDates = this.toggleDates.bind(this);
    this.toggleSearchRefined = this.toggleSearchRefined.bind(this);
    this.state = {
      collapseCategories: true,
      collapseParticipants: false,
      collapseDates: false,
      collapseSearchRefined: true
    };
  }

  toggleCategories() {
    this.setState({ collapseCategories: !this.state.collapseCategories });
  }

  toggleParticipants() {
    this.setState({ collapseParticipants: !this.state.collapseParticipants });
  }

  toggleDates() {
    this.setState({ collapseDates: !this.state.collapseDates });
  }

  toggleSearchRefined() {
    this.setState({ collapseSearchRefined: !this.state.collapseSearchRefined });
  }

  clickSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.props.handleSubmit}>
          {/* HEADER OF SEARCH FORM */}
          <Row className="blueHeader">
            <Col xs="2">
              <Link to="/" className="price text-primary">
                <i className="fas fa-chevron-left text-white" />
              </Link>
            </Col>
            <Col xs="8">
              <p className="text-white text-center mb-0">Rechercher</p>
            </Col>
          </Row>
          {/* TYPE SELECTION */}
          <Row>
            <Col>
              <h2 onClick={() => this.toggleCategories()} className="pr-3">
                Catégories
            </h2>
              <div className="activitiesTitleUnderline mb-3 w-100" />
            </Col>
          </Row>
          <Collapse isOpen={this.state.collapseCategories}>
            {/* <Row className="text-center typeList">
              <Col xs="4">
                <Field component={renderField} type="radio" id="aventure" name="typeChoice" value="aventure" />
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
                <Field component={renderField} type="radio" id="aquatic" name="typeChoice" value="aquatique" />
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
                <Field component={renderField} type="radio" id="culturel" name="typeChoice" value="culturel" />
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
                <Field component={renderField} type="radio" id="deplacement" name="typeChoice" value="deplacement" />
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
                <Field component={renderField} type="radio" id="restauration" name="typeChoice" value="restauration" />
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
                <Field component={renderField} type="radio" id="aperitif" name="typeChoice" value="aperitif" />
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
                <Field component={renderField} type="radio" id="nocturne" name="typeChoice" value="nocturne" />
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
                <Field component={renderField} type="radio" id="bien-etre" name="typeChoice" value="bien-etre" />
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
                <Field component={renderField} type="radio" id="enfants" name="typeChoice" value="enfants" />
                <Label className="typeChoice" for="enfants">
                  <img
                    className="categoriesSearch"
                    src="/images/enfants.png"
                    alt="categoriesIMG"
                  />
                  <p>Enfants</p>
                </Label>
              </Col>
            </Row> */}
          </Collapse>
          <Row>
            <Col>
              <h2 onClick={() => this.toggleParticipants()} className="pr-3">
                Participants
            </h2>
              <div className="activitiesTitleUnderline mb-3 w-100" />
            </Col>
          </Row>
          <Collapse isOpen={this.state.collapseParticipants}>
            <Row>
              <Col xs="4">
                <Button
                  onClick={
                    this.props.count > 1 ? () => this.props.removeOne() : ""
                  }
                  className="text-center mb-0"
                >
                  -
              </Button>
              </Col>
              <Col xs="4">
                <p className="text-center mb-0">{this.props.count}</p>
              </Col>
              <Col xs="4">
                <Button
                  onClick={() => this.props.addOne()}
                  className="text-center mb-0"
                >
                  +
              </Button>
              </Col>
            </Row>
          </Collapse>
          <Row>
            <Col>
              <h2 onClick={() => this.toggleDates()} className="pr-3">
                Dates
            </h2>
              <div className="activitiesTitleUnderline mb-3 w-100" />
            </Col>
          </Row>
          <Collapse isOpen={this.state.collapseDates}>
            <Row>
              <Col>
                <Badge className="badgeDate">Du...</Badge>
              </Col>
              <Col>
                <Field component={renderField} name="dateStart" type="date" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Badge className="badgeDate">Au...</Badge>
              </Col>
              <Col>
                <Field component={renderField} name="dateEnd" type="date" />
              </Col>
            </Row>
          </Collapse>
          {/*  <Row>
            <Col>
              <h2 onClick={() => this.toggleSearchRefined()} className="pr-3">
                Affiner la recherche
            </h2>
              <div className="activitiesTitleUnderline mb-3 w-100" />
            </Col>
          </Row>
          <Collapse isOpen={this.state.collapseSearchRefined}>
            <Row>
              <Col>
                <Field type="text" component={renderField} name="keywords" className="search-bar" placeholder="Mot-clé" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Field type="text" component={renderField} name="country" className="search-bar" placeholder="Pays" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Field type="text" component={renderField} name="city" className="search-bar" placeholder="Ville" />
              </Col>
            </Row>
          </Collapse>
          <Row>
            <Col>
              <button type="submit" disabled={this.props.submitting} className="search-btn">Rechercher</button>
            </Col>
          </Row> */}
        </form>
      </Fragment >
    );
  }
}

export default reduxForm({
  form: 'searchActivities'
})(SearchActivityForm);
