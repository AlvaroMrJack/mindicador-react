import React, { Component } from "react";

import "./styles.css";
import HomeContainer from "./containers/HomeContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HomeContainer />
        </header>
      </div>
    );
  }
}

export default App;
