import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row
} from "reactstrap";

const ButtonChangeView = ({
  toggle,
  view,
  dropdownOpen,
  changeViewToActivities,
  changeViewToPlaces
}) => (
  <div>
    <Row>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Menu</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => changeViewToPlaces()}>
            Lieux
          </DropdownItem>
          <DropdownItem onClick={() => changeViewToActivities()}>
            Activités
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Row>
  </div>
);

export default ButtonChangeView;
