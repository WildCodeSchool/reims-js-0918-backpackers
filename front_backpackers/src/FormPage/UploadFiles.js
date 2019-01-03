import React, { Component } from "react";
import axios from "axios";

class UploadFiles extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null,
      loaded: 0
    };
  }

  handleUpload = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile, this.state.selectedFile.name);

    axios
      .post("/upload", data, {
        onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100
          });
        }
      })
      .then(res => {
        console.log(res.statusText);
      });
  };

  handleSelectedFile = event => {
    this.setState({ selectedFile: event.target.files[0], loaded: 0 });
  };

  render() {
    return (
      <div>
        <input type="file" onChange={this.handleSelectedFile} />
        <button onClick={() => this.handleUpload()}>Envoyer</button>
      </div>
    );
  }
}

export default UploadFiles;
