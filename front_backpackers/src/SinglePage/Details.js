import React, { Component, Fragment } from "react";
import { Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from 'classnames';

class Details extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <Fragment>


        <Nav tabs className="mb-2">
          <NavItem className="text-center w-50">
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              L'ACTIVITÉ
                </NavLink>
          </NavItem>
          <NavItem className="text-center w-50">
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              LE LIEU
                </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col xs={{ size: '10', offset: 1 }}>
                <Row>
                  <Col xs="12">
                    <h3 className="text-center p-1 mt-1">Rafting in Athènes</h3>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col xs="4">
                    <div className="price characteristic text-center">
                      <p className="mb-0"><i className="fas fa-coins"></i></p>
                      <p>15<i className="fas fa-euro-sign pl-1"></i></p>
                    </div>
                  </Col>
                  <Col xs="4">
                    <div className="characteristic text-center">
                      <p className="mb-0"><i className="fas fa-swimmer"></i></p>
                      <p className="">Activité Aquatique</p>
                    </div>
                  </Col>
                  <Col xs="4">
                    <div className="characteristic text-center">
                      <p className="mb-0"><i className="fas fa-user-alt"></i></p>
                      <p>3 Places Restantes</p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs="12">
                    <p className="text-justify activityDescr mb-3 p-2">
                      Bonjour à tous les frenchies!<br /><br />
                      On cherche deux personnes pour completer notre équipe d'escalade. On compte rester 5/6 heures sur place. On compte s'installer aux alentours du parc Siggrou. Possibilité de remettre ça si ça se passe bien ! Premier servis.
            </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <p>Map</p>
            </Row>
          </TabPane>
        </TabContent>





        <div className="participate">
          <button type="button" className="btn">
            Participer
      </button>
        </div>
      </Fragment >

    )
  }

};
export default Details;
