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
        <DropdownToggle className="w-100" caret>{view === "PLACES" ? "Lieux" : "Activités"}</DropdownToggle>
        <DropdownMenu>
          {view === "ACTIVITIES" && (
            <DropdownItem onClick={() => changeViewToPlaces()}>
              Lieux
              </DropdownItem>
          )}
          {view === "PLACES" && (
            <DropdownItem onClick={() => changeViewToActivities()}>
              Activités
              </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </Fragment>
  );

export default DropdownButton;
