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

  componentDidMount() {
    // Check URL parameters on initial load
    this.checkUrlParams();
    // Listen for URL changes (back/forward buttons)
    window.addEventListener('popstate', this.checkUrlParams);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.checkUrlParams);
  }

  checkUrlParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    if (page === 'resume') {
      this.setState({ currentPage: 'resume' });
    } else {
      this.setState({ currentPage: 'home' });
    }
  };

  setCurrentPage = (page) => {
    this.setState({ currentPage: page });
    // Update URL without page reload
    const url = page === 'home' ? 
      window.location.pathname : 
      `${window.location.pathname}?page=${page}`;
    window.history.pushState({}, '', url);
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
