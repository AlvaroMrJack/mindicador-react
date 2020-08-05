import React, { Component } from "react";
import axios from "axios";

class HomeController extends Component {
  componentDidMount() {
    axios
      .get("https://mindicador.cl/api")
      .then(result => {
        console.log(result);
      })
      .catch(console.log);
  }

  render() {
    return <h1>Hola Mundo</h1>;
  }
}

export default HomeController;
