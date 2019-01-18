import React, { Component, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import SearchActivityForm from "./SearchActivityForm";
import ActivityThumbnail from "../HomePage/ActivityThumbnail";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchView: "searchForm",
      searchCollapse: {
        collapseCategories: true,
        collapseParticipants: false,
        collapseDates: false,
        collapseAdvanced: true
      }
    };
    this.toggleCategories = this.toggleCategories.bind(this);
    this.toggleParticipants = this.toggleParticipants.bind(this);
    this.toggleDates = this.toggleDates.bind(this);
    this.toggleAdvanced = this.toggleAdvanced.bind(this);
    this.getSearchView = this.getSearchView.bind(this);
    this.emptyForm = this.emptyForm.bind(this);
  }
  getSearchView() {
    this.setState({ searchView: "searchForm" });
  }

  toggleCategories() {
    this.setState({
      searchCollapse: {
        ...this.state.searchCollapse,
        collapseCategories: !this.state.searchCollapse.collapseCategories
      }
    });
  }

  toggleParticipants() {
    this.setState({
      searchCollapse: {
        ...this.state.searchCollapse,
        collapseParticipants: !this.state.searchCollapse.collapseParticipants
      }
    });
  }

  toggleDates() {
    this.setState({
      searchCollapse: {
        ...this.state.searchCollapse,
        collapseDates: !this.state.searchCollapse.collapseDates
      }
    });
  }

  toggleAdvanced() {
    this.setState({
      searchCollapse: {
        ...this.state.searchCollapse,
        collapseAdvanced: !this.state.searchCollapse.collapseAdvanced
      }
    });
  }

  emptyForm() {
    const resetData = {};
    const resetResults = [];
    this.setState({
      searchCollapse: {
        collapseCategories: true,
        collapseParticipants: false,
        collapseDates: false,
        collapseAdvanced: true
      }
    });
    this.props.getSearchData(resetData, resetResults);
    this.forceUpdate();
  }

  submit = searchData => {
    this.setState({ searchView: "searchResults" });
    if (!this.state.searchCollapse.collapseCategories) {
      delete searchData.typeChoice;
    }
    if (!this.state.searchCollapse.collapseDates) {
      delete searchData.dateStart;
      delete searchData.dateEnd;
    }
    if (!this.state.searchCollapse.collapseParticipants) {
      delete searchData.placeNumber;
    }
    if (!this.state.searchCollapse.collapseAdvanced) {
      delete searchData.keywords;
      delete searchData.country;
      delete searchData.city;
    }
    const searchQuery = Object.keys(searchData)
      .map(data => data + "=" + searchData[data])
      .join("&");
    console.log(searchQuery);
    axios
      .get(`/search?` + searchQuery)
      .then(response => this.props.getSearchData(searchData, response.data));
  };

  render() {
    return (
      <Fragment>
        <Row className="blueHeader">
          <Col xs="2">
            {this.state.searchView === "searchForm" ? (
              <Link
                to="/"
                onClick={this.emptyForm}
                className="price text-primary"
              >
                <i className="fas fa-chevron-left text-white" />
              </Link>
            ) : (
              <button onClick={() => this.getSearchView()}>
                <i className="fas fa-chevron-left text-white" />
              </button>
            )}
          </Col>
          <Col xs="8">
            <p className="text-white text-center mb-0">Rechercher</p>
          </Col>
        </Row>
        {this.state.searchView === "searchForm" ? (
          <SearchActivityForm
            emptyForm={this.emptyForm}
            onSubmit={this.submit}
            collapseCategories={this.state.searchCollapse.collapseCategories}
            collapseDates={this.state.searchCollapse.collapseDates}
            collapseParticipants={
              this.state.searchCollapse.collapseParticipants
            }
            collapseAdvanced={this.state.searchCollapse.collapseAdvanced}
            toggleCategories={this.toggleCategories}
            toggleDates={this.toggleDates}
            toggleParticipants={this.toggleParticipants}
            toggleAdvanced={this.toggleAdvanced}
          />
        ) : this.props.search.searchResults.length > 0 ? (
          this.props.search.searchResults.map(activity => (
            <ActivityThumbnail key={activity.id} {...activity} />
          ))
        ) : (
          <p className="text-center">Aucun résultat</p>
        )}
      </Fragment>
    );
  }
}

export default SearchPage;
