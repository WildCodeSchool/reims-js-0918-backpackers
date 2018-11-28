import React from "react";
import { Row, Col, Media, Button } from "reactstrap";

const PlacesList = () => (
  <div>
    <Row>
      <Col xs="12">
        <Media className="d-flex align-items-stretch">
          <Media left href="#">
            <Media
              object
              src="http://via.placeholder.com/100"
              alt="Generic placeholder image"
            />
          </Media>
          <Media body className="d-flex flex-column">
            <Media heading className="mb-1 mx-1 d-flex justify-content-between">
              <span>
                <i className="fas fa-location-arrow pr-1" />
                ATHENES
              </span>
              <span>
                <i className="fas fa-calendar pr-1" />
                Ferme dans <span className="itemDaysLeft">5</span> jours
              </span>
            </Media>
            Bonjour à tous les Frenchies <br />
            On cherche deux personnes pour compléter notr équipe d'escalade. On
            compte rester 6 heures sur place.
            <div className="d-flex align-items-end justify-content-between mt-auto">
              <Button className="seeItem">Voir</Button>
              <span className="itemListPrice pr-2">
                15€/
                <i className="far fa-user" />
              </span>
            </div>
          </Media>
        </Media>
      </Col>
    </Row>

    <Row className="fixed-bottom listFooter">
      <Button className="w-50 listSearchBtn">
        Rechercher <i className="fas fa-search-location" />
      </Button>
      <Button className="w-50 listPostBtn">
        <i className="fas fa-pencil-alt" /> Publier{" "}
      </Button>
    </Row>

    <Row>
      <Col xs={{ size: 8, offset: 2 }} className="homeUnderline mt-3 mb-4" />
    </Row>

    <Row>
      <Col xs="12">
        <Media className="d-flex align-items-stretch">
          <Media left href="#">
            <Media
              object
              src="http://via.placeholder.com/100"
              alt="Generic placeholder image"
            />
          </Media>
          <Media body className="d-flex flex-column">
            <Media heading className="mb-1 mx-1 d-flex justify-content-between">
              <span>
                <i className="fas fa-location-arrow pr-1" />
                ATHENES
              </span>
              <span>
                <i className="fas fa-calendar pr-1" />
                Ferme dans <span className="itemDaysLeft">5</span> jours
              </span>
            </Media>
            Bonjour à tous les Frenchies <br />
            On cherche deux personnes pour compléter notr équipe d'escalade. On
            compte rester 6 heures sur place.
            <div className="d-flex align-items-end justify-content-between mt-auto">
              <Button className="seeItem">Voir</Button>
              <span className="itemListPrice pr-2">
                15€/
                <i className="far fa-user" />
              </span>
            </div>
          </Media>
        </Media>
      </Col>
    </Row>

    <Row className="fixed-bottom listFooter">
      <Button className="w-50 listSearchBtn">
        Rechercher <i className="fas fa-search-location" />
      </Button>
      <Button className="w-50 listPostBtn">
        <i className="fas fa-pencil-alt" /> Publier{" "}
      </Button>
    </Row>

    <Row>
      <Col xs={{ size: 8, offset: 2 }} className="homeUnderline mt-3 mb-4" />
    </Row>
  </div>
);

export default PlacesList;
