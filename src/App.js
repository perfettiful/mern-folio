import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Body />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
