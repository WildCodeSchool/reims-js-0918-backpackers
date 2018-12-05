import React, { Fragment } from "react"
import { Row, Col, Button, Media, Badge } from "reactstrap"

import "./Profile.scss"

const Profile = () => {
  return (
    <Fragment>
      <Row>
        <Col xs="4">
          <Button className="previousPage py-0 px-3 mt-4"><i className="fas pr-2 fa-angle-left"></i>Retour</Button>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 4, offset: 4 }} className="profilePicture">
          <Button className="rounded-circle"><img src="https://via.placeholder.com/75" /></Button>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 8, offset: 2 }} className="text-center">
          <h4>Aude Javel</h4>
          <p>audej@gmail.com</p>
        </Col>
        <Col xs="2">
          <Button><i className="fas fa-pencil-alt" alt="Photo de profil" ></i></Button>
        </Col>
      </Row>

      <Row>
        <Col xs={{ size: 8, offset: 2 }} className="text-center">
          <p>Fan du japon, backpackeuse et gourmande</p>
        </Col>
      </Row>

      <Row>
        <Col xs={{ size: 8, offset: 2 }} className="text-center">
          <div className="achievements">
            <img src="https://via.placeholder.com/25" alt="badge" />
            <img src="https://via.placeholder.com/25" alt="badge" />
            <img src="https://via.placeholder.com/25" alt="badge" />
            <img src="https://via.placeholder.com/25" alt="badge" />
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12" className="text-center">
          <p>Vous n'avez proposé pour le moment aucune activité.</p>
        </Col>
      </Row>

      <Row>
        <Col xs="12" className="text-center">
          <Badge color="primary">AquaPoney</Badge>
          <Badge color="primary">Cinéma</Badge>
          <Badge color="primary">Japon</Badge>
          <Badge color="primary">Jeux Vidéo</Badge>
        </Col>
      </Row>


      <Row>
        <h2>Historique des anciennes activitées</h2>
        <Col xs="12">
          <Media className="d-flex align-items-stretch">
            <Media left href="#">
              <Media
                object
                src="https://via.placeholder.com/150"
                alt="picture of activity"
                className="activityPicture"
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
                  Ferme dans 5 jours
                </span>
              </Media>
              Salut ! Je Cherche 5 rafteurs pour rafter le long du fleuve ! Va va être CHANMAXX n'hésitez pas à vous inscrire!
            <div className="d-flex align-items-end justify-content-between mt-auto">
                <Button className="seeItem">Voir</Button>
                <span className="itemListPrice pr-2">
                  15€ /
              <i className="far fa-user" />
                </span>
              </div>
            </Media>
          </Media>
        </Col>
      </Row>


    </Fragment>
  )

}

export default Profile