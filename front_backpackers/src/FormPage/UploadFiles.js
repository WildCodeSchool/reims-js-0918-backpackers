import React, { Component } from "react";
import axios from "axios";

class UploadFiles extends Component {
  sendPictures() {
    axios.post("/upload", {
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
  }

  render() {
    return (
      <div>
        <form
          method="POST"
          encType="multipart/form-data"
          action="upload"
          onSubmit={() => this.sendPictures()}
        >
          <input accept="image/png" type="file" name="monfichier" multiple />
          <button>Envoyer</button>
        </form>
      </div>
    );
  }
}

export default UploadFiles;
