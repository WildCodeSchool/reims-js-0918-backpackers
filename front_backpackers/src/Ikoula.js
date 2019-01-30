import React, { Component } from "react";

export class Ikoula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  closeIkoula = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      this.state.open && (
        <div
          className="ikoula"
          style={{
            position: "fixed",
            bottom: "10px",
            width: "94%",
            background: "#fff",
            borderRadius: "7px",
            left: "3%",
            padding: "0 10px",
            opacity: ".8",
            zIndex: 1000
          }}
        >
          {window.innerWidth > 600 && (
            <p
              className="withBorder"
              style={{
                textAlign: "center",
                paddingTop: "10px",
                margin: 0,
                color: "#321656",
                textTransform: "uppercase",
                fontWeight: "bold"
              }}
            >
              Optimisé pour mobile
            </p>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <p style={{ margin: 0, color: "#321656" }}>
              Site hébergé dans le{" "}
              <a
                style={{ color: "#FF6C00" }}
                href="https://www.ikoula.com/fr/serveur-dedie"
              >
                Cloud Public
              </a>{" "}
              IKOULA
            </p>
            <a
              href="https://www.ikoula.com"
              title="Ikoula Hébergement web, serveurs dédiés et solutions sur mesure"
              target="_blank"
              rel="noopener"
            >
              <img
                style={{ height: "40px" }}
                src="https://www.ikoula.com/img/hosted_by_ikoula_150_blanc.png"
                alt="Ikoula"
                border="0"
              />
            </a>
          </div>
          <span
            onClick={() => this.closeIkoula()}
            style={{
              position: "absolute",
              color: "#321656",
              top: "5px",
              right: "5px"
            }}
          >
            <i className="fas fa-times" />
          </span>
        </div>
      )
    );
  }
}

export default Ikoula;
