import React, { Component } from "react";
import axios, { post } from "axios";
import SearchActivityForm from "./SearchActivityForm";

class SearchPage extends Component {
  constructor(props) {
    super(props);
  }


  submit = searchData => {
    const searchQuery = Object.keys(searchData).map(data => data + "=" + searchData[data]).join("&")
    console.log(searchQuery)
    axios
      .get(`/search?` + searchQuery)
      .then(response => console.log(response.data))
  };
  render() {
    return (
      <SearchActivityForm onSubmit={this.submit} />
    )
  }
}

export default SearchPage;
