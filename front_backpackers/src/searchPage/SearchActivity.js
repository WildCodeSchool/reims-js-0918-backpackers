import React, { Component, Fragment } from "react";
import { Row, Col, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./SearchPage.css";

class SearchActivity extends Component {
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
          <Col xs="9">
            <Input className="search-bar" placeholder="Rechercher" />
          </Col>
          <Col xs="3">
            <Button className="search-btn">Rechercher</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="pr-3">Catégories</h2>
            <div className="activitiesTitleUnderline mb-3 w-100" />
          </Col>
        </Row>
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
        <Row>
          <Col>
            <h2 className="pr-3">Participants</h2>
            <div className="activitiesTitleUnderline mb-3 w-100" />
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <Button
              onClick={this.props.count > 1 ? () => this.props.removeOne() : ""}
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
        <Row>
          <Col>
            <h2 className="pr-3">Dates</h2>
            <div className="activitiesTitleUnderline mb-3 w-100" />
          </Col>
        </Row>
        <Row>
          <Col />
          <Col />
          <Col />
        </Row>
      </Fragment>
    );
  }
}

export default SearchActivity;
