import React, { Component, Fragment } from "react";
import { Row, Col, Input, Button, Collapse, Badge, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { Field, reduxForm } from 'redux-form'
import "./SearchPage.css";

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

class SearchActivity extends Component {
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

  startSearch(values) {

    console.log(values)
    // axios
    // .get('/search',  )
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

  render() {
    return (
      <Fragment>
        <form onSubmit={values => this.startSearch(values)}>
          <Row className="search-header">
            <Col xs="2">
              <Link to="/" className="price text-primary">
                <i className="fas fa-chevron-left text-white" />
              </Link>
            </Col>
            <Col xs="8">
              <p className="text-center mb-0">Rechercher</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 onClick={() => this.toggleCategories()} className="pr-3">
                Catégories
            </h2>
              <div className="activitiesTitleUnderline mb-3 w-100" />
            </Col>
          </Row>
          <Collapse isOpen={this.state.collapseCategories}>
            <Row className="text-center typeList">
              <Col xs="4">
                <Input type="radio" id="aventure" name="typeChoice" />
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
                <Input type="radio" id="aquatic" name="typeChoice" />
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
                <Input type="radio" id="culturel" name="typeChoice" />
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
                <Input type="radio" id="deplacement" name="typeChoice" />
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
                <Input type="radio" id="restauration" name="typeChoice" />
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
                <Input type="radio" id="aperitif" name="typeChoice" />
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
                <Input type="radio" id="nocturne" name="typeChoice" />
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
                <Input type="radio" id="bien-etre" name="typeChoice" />
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
                <Input type="radio" id="enfants" name="typeChoice" />
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
                {console.log("message", this.props.count)}
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
                <input id="searchByDate" name="searchByDate" type="date" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Badge className="badgeDate">Au...</Badge>
              </Col>
              <Col>
                <input id="searchByDate" name="searchByDate" type="date" />
              </Col>
            </Row>
          </Collapse>
          <Row>
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
                <Input className="search-bar" placeholder="Mot-clé" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input className="search-bar" placeholder="Pays" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input className="search-bar" placeholder="Ville" />
              </Col>
            </Row>
          </Collapse>
          <Row>
            <Col>
              <Button type="submit" className="search-btn">Rechercher</Button>
            </Col>
          </Row>
        </form>
      </Fragment >
    );
  }
}

export default reduxForm({
  form: 'searchActivities'
})(SearchActivity);
