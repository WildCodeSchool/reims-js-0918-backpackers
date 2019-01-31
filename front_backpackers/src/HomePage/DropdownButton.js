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
  changeViewToPlaces,
  getMapFilter,
  currentFilter
}) => (
  <Fragment>
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="w-100" caret>
        {view === "places"
          ? "Lieux"
          : view === "activities"
          ? "Activités"
          : currentFilter}
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
            <DropdownItem onClick={() => getMapFilter("Pas de filtre")}>
              Tout
            </DropdownItem>
            <DropdownItem onClick={() => getMapFilter("Apéritifs")}>
              Apéritifs
            </DropdownItem>
            <DropdownItem onClick={() => getMapFilter("Aquatique")}>
              Aquatique
            </DropdownItem>
            <DropdownItem onClick={() => getMapFilter("Aventure")}>
              Aventure
            </DropdownItem>
            <DropdownItem onClick={() => getMapFilter("Bien-être")}>
              Bien-être
            </DropdownItem>
            <DropdownItem onClick={() => getMapFilter("Culturel")}>
              Culturel
            </DropdownItem>
            <DropdownItem onClick={() => getMapFilter("Déplacements")}>
              Déplacements
            </DropdownItem>
            <DropdownItem onClick={() => getMapFilter("Enfants")}>
              Enfants
            </DropdownItem>
            <DropdownItem onClick={() => getMapFilter("Nocturne")}>
              Nocturne
            </DropdownItem>
            <DropdownItem onClick={() => getMapFilter("Restauration")}>
              Restauration
            </DropdownItem>
          </Fragment>
        )}
      </DropdownMenu>
    </Dropdown>
  </Fragment>
);

export default DropdownButton;
