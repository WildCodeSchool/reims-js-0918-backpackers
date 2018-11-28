import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col
} from "reactstrap";

const DropdownButton = ({
  toggle,
  view,
  dropdownOpen,
  changeViewToActivities,
  changeViewToPlaces
}) => (
  <div>
    <Row>
      <Col xs={{ size: 3, offset: 3 }}>
        <Dropdown className="ml-3" isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>{view}</DropdownToggle>
          <DropdownMenu>
            {view === "ACTIVITIES" && (
              <DropdownItem onClick={() => changeViewToPlaces()}>
                Places
              </DropdownItem>
            )}
            {view === "PLACES" && (
              <DropdownItem onClick={() => changeViewToActivities()}>
                Activities
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      </Col>
    </Row>
  </div>
);

export default DropdownButton;
