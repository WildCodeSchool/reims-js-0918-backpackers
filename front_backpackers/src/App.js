import React, { Component } from "react";
import SinglePage from "./SinglePage/SinglePage";
import Login from "./Login";
import HomePage from "./HomePage";
import "./App.css";
import { Container } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeList: [
        {
          idPlace: 1,
          name: "Le Dropkick bar",
          city: "Reims",
          adress: "15 Rue du Colonel Fabien",
          price: 5,
          type: "Bar",
          capacity: 50,
          description:
            "Le Dropkick bar est un bar situé proche de la comédie de Reims, on y sert principalement de la bière et écoute du rock",
          contact: "dropkick@gmail.com, 09.86.07.58.23",
          rating: null,
          picture: "https://zupimages.net/up/18/48/5srf.jpeg"
        },
        {
          idPlace: 2,
          name: "Gaumont Parc Millésime",
          city: "Reims",
          adress: "Parc Millésime",
          price: 15,
          type: "Cinéma",
          capacity: 400,
          description:
            "Cinéma Gaumont comprenant 12 salles dont une salle Imax Laser",
          contact: "GaumontParcMillésime@gmail.com, 08.92.69.66.96",
          rating: null,
          picture: "https://zupimages.net/up/18/48/w6te.jpg"
        },
        {
          idPlace: 3,
          name: "Meltdown Reims",
          city: "Reims",
          adress: "188 Rue de Vesle",
          price: 5,
          type: "bar e-sport",
          capacity: 30,
          description:
            "Bar e-sport ou vous pouvez suivre les compétitions e-sport tout en buvant une bonne bière !",
          contact: "MeltdownReims@gmail.com, 07.78.32.45.88",
          rating: null,
          picture: "https://zupimages.net/up/18/48/y2ww.png"
        }
      ]
    };
  }
  render() {
    return (
      <Container fluid>
        <Login />

        <HomePage listPlace={this.state.placeList} />
        <SinglePage />
      </Container>
    );
  }
}

export default App;
