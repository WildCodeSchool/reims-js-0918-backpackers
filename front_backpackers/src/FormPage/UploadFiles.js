import React, { Component } from "react";
import { post } from "axios";
import { Button } from "reactstrap";

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.file = null;
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit

    this.fileUpload(this.file).then(res => {
      this.props.history.push("/");
    });
  }
  onChange(e) {
    this.file = e.target.files[0];
  }
  fileUpload(file) {
    const url = "/upload";
    const formData = new FormData();
    formData.append("monfichier", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    return post(url, formData, config);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h3>File Upload</h3>
        <input type="file" onChange={this.onChange} />
        <Button type="submit">Upload</Button>
      </form>
    );
  }
}

export default Avatar;
