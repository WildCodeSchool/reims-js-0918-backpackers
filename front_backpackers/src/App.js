import React, { Component } from "react";
import Login from "./Login";
import HomePage from "./HomePage/HomePage";
import "./App.css";
import { Container } from "reactstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "ACTIVITIES",
      dropdownOpen: false,
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
      ],
      activityList: [
        {
          idActivity: 1,
          idPlace: 1,
          city: "Reims",
          name: "Soirée au Dropkick",
          price: 15,
          type: "rencontre",
          capacity: 10,
          picture: "https://zupimages.net/up/18/48/7hk0.jpg",
          description:
            "J'organise une soirée pour faire de nouvelle rencontre car je suis nouveau dans cette ville",
          contact: "06.43.56.32.78",
          rating: null,
          creator: "Michael",
          participants: null,
          date: "6 décembre 2018"
        },
        {
          idActivity: 2,
          idPlace: 2,
          city: "Reims",
          name: "Aquaman (imax)",
          price: 16.3,
          type: "cinéma",
          capacity: 6,
          picture: "https://zupimages.net/up/18/48/4yyh.png",
          description:
            "J'organise une sortie au cinéma pour aller voir Aquaman en Imax au Gaumont Parc Millésime, on verras sur place si on se fait une bouffe après !",
          contact: "06.67.98.56.21",
          rating: null,
          creator: "Charles",
          participants: null,
          date: "23 décembre 2018"
        },
        {
          idActivity: 3,
          idPlace: 3,
          city: "Reims",
          name: "World Championship LoL",
          price: 20,
          type: "soirée",
          capacity: 10,
          picture: "https://zupimages.net/up/18/48/luy5.jpg",
          description:
            "Pour ceux qui veulent voir les Worlds de LoL et boire un coup ensemble ! :)",
          contact: "06.23.87.90.54",
          rating: null,
          creator: "Robin",
          participants: null,
          date: "14 décembre 2018"
        }
      ]
    };
    this.changeViewToActivities = this.changeViewToActivities.bind(this);
    this.changeViewToPlaces = this.changeViewToPlaces.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  changeViewToActivities() {
    this.setState({ view: "ACTIVITIES" });
  }

  changeViewToPlaces() {
    this.setState({ view: "PLACES" });
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Container fluid>
        <Login />
        <HomePage
          changeViewToActivities={this.changeViewToActivities}
          changeViewToPlaces={this.changeViewToPlaces}
          toggleMethod={this.toggle}
          dropdownOpen={this.state.dropdownOpen}
          view={this.state.view}
          listPlace={this.state.placeList}
          listActivity={this.state.activityList}
        />
      </Container>
    );
  }
}

export default App;
