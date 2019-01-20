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
      <DropdownToggle className="w-100" caret>
        {view === "places"
          ? "Lieux"
          : view === "places"
          ? "Activités"
          : "Filtrer"}
      </DropdownToggle>
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
        {view === "maps" && (
          <Fragment>
            <DropdownItem>Tout</DropdownItem>
            <DropdownItem>Apéritifs</DropdownItem>
            <DropdownItem>Aquatique</DropdownItem>
            <DropdownItem>Aventure</DropdownItem>
            <DropdownItem>Bien-être</DropdownItem>
            <DropdownItem>Culturel</DropdownItem>
            <DropdownItem>Déplacement</DropdownItem>
            <DropdownItem>Enfants</DropdownItem>
            <DropdownItem>Nocturne</DropdownItem>
            <DropdownItem>Restauration</DropdownItem>
          </Fragment>
        )}
      </DropdownMenu>
    </Dropdown>
  </Fragment>
);

export default DropdownButton;
