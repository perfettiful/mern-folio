import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { initGA, trackPageView } from "./utils/analytics";
import "./App.css";

class App extends Component {
  componentDidMount() {
    // Initialize Google Analytics
    initGA();
    
    // Track initial page view
    trackPageView(window.location.pathname + window.location.search, document.title);
  }

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
