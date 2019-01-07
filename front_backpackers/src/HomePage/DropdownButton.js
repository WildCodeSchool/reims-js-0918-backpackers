import React, { Fragment } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const DropdownButton = ({
  toggle,
  view,
  dropdownOpen,
  changeViewToActivities,
  changeViewToPlaces
}) => (
    <Fragment>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className="w-100" caret>{view === "places" ? "Lieux" : "Activités"}</DropdownToggle>
        <DropdownMenu>
          {view === "activities" && (
            <DropdownItem onClick={() => changeViewToPlaces()}>
              Lieux
              </DropdownItem>
          )}
          {view === "places" && (
            <DropdownItem onClick={() => changeViewToActivities()}>
              Activités
              </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </Fragment>
  );

export default DropdownButton;
