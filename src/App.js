import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Body from "./components/Body";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  state = {
    currentPage: 'home'
  };

  setCurrentPage = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { currentPage } = this.state;
    
    return (
      <React.Fragment>
        <Navigation currentPage={currentPage} setCurrentPage={this.setCurrentPage} />
        {currentPage === 'home' ? <Body /> : <Resume />}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
