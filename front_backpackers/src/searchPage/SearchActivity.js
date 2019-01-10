import React, { Component, Fragment } from "react";
import { Row, Col, Input, Button, Collapse, Badge } from "reactstrap";
import { Link } from "react-router-dom";
import "./SearchPage.css";

class SearchActivity extends Component {
  constructor(props) {
    super(props);
    this.toggleCategories = this.toggleCategories.bind(this);
    this.toggleParticipants = this.toggleParticipants.bind(this);
    this.toggleDates = this.toggleDates.bind(this);
    this.toggleSearchRefined = this.toggleSearchRefined.bind(this);
    this.state = {
      collapseCategories: false,
      collapseParticipants: false,
      collapseDates: false,
      collapseSearchRefined: false
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

  render() {
    return (
      <Fragment>
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
            <h2 onClick={this.toggleCategories} className="pr-3">
              Catégories
            </h2>
            <div className="activitiesTitleUnderline mb-3 w-100" />
          </Col>
        </Row>
        <Collapse isOpen={this.state.collapseCategories}>
          <Row>
            <Col xs="4">
              <img
                className="categoriesSearch"
                src="https://zupimages.net/up/18/43/4usz.png"
                alt="categoriesIMG"
              />
              <p>Aventure</p>
            </Col>
            <Col xs="4">
              <img
                className="categoriesSearch"
                src="https://zupimages.net/up/19/02/zxur.png"
                alt="categoriesIMG"
              />
              <p>Aquatique</p>
            </Col>
            <Col xs="4">
              <img
                className="categoriesSearch"
                src="https://zupimages.net/up/19/02/4spl.png"
                alt="categoriesIMG"
              />
              <p>Culturel</p>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <img
                className="categoriesSearch"
                src="https://zupimages.net/up/19/02/fsb2.png"
                alt="categoriesIMG"
              />
              <p>Déplacements</p>
            </Col>
            <Col xs="4">
              <img
                className="categoriesSearch"
                src="https://zupimages.net/up/19/02/4rfb.png"
                alt="categoriesIMG"
              />
              <p>Restauration</p>
            </Col>
            <Col xs="4">
              <img
                className="categoriesSearch"
                src="https://zupimages.net/up/19/02/puak.png"
                alt="categoriesIMG"
              />
              <p>Apéritifs</p>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <img
                className="categoriesSearch"
                src="https://zupimages.net/up/19/02/rp99.png"
                alt="categoriesIMG"
              />
              <p>Nocturne</p>
            </Col>
            <Col xs="4">
              <img
                className="categoriesSearch"
                src="https://zupimages.net/up/19/02/nmmj.png"
                alt="categoriesIMG"
              />
              <p>Bien-être</p>
            </Col>
            <Col xs="4">
              <img
                className="categoriesSearch"
                src="https://zupimages.net/up/19/02/8qfx.png"
                alt="categoriesIMG"
              />
              <p>Enfants</p>
            </Col>
          </Row>
        </Collapse>
        <Row>
          <Col>
            <h2 onClick={this.toggleParticipants} className="pr-3">
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
            <h2 onClick={this.toggleDates} className="pr-3">
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
            <h2 onClick={this.toggleSearchRefined} className="pr-3">
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
            <Button className="search-btn">Rechercher</Button>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default SearchActivity;
