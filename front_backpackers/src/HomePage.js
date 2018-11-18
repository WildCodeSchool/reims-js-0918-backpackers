import React, { Fragment } from 'react';
import { Row, Col, Media, Button } from 'reactstrap';
import "./HomePage.css"


const HomePage = () => {
  return (
    <div className="homePage">
      <Row>
        <Col xs="12">
          <Media>
            <Media left href="#">
              <Media object src="http://via.placeholder.com/100" alt="Generic placeholder image" />
            </Media>
            <Media body>
              <Media heading>
                Athenes - Ferme dans 5 jours
        </Media>
              Bonjour à tous les Frenchies <br />On cherche deux personnes pour compléter notr équipe d'escalade. On compte rester 6 heures sur place.
              <div className="d-flex justify-content-between">
                <Button className="seeItem">Voir</Button>
                <span>15€/pers</span>
              </div>
            </Media>
          </Media>
        </Col>


      </Row>
      <Row className="fixed-bottom listFooter">
        <Button className="w-50 listSearchBtn">Rechercher</Button>
        <Button className="w-50 listPostBtn">Publier </Button>
      </Row>

    </div>


  )
}

export default HomePage