import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Navigation extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu after clicking
    this.setState({ isOpen: false });
  };

  handlePageChange = (e, page) => {
    e.preventDefault();
    this.props.setCurrentPage(page);
    // Close mobile menu after clicking
    this.setState({ isOpen: false });
  };

  handleNavigateAndScroll = (e, targetId) => {
    e.preventDefault();
    // First navigate to home if not already there
    if (this.props.currentPage !== 'home') {
      this.props.setCurrentPage('home');
      // Wait for page to render then scroll
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    // Close mobile menu after clicking
    this.setState({ isOpen: false });
  };
  render() {
    return (
      <Navbar color="light" dark expand="md" className="fixed-top">
        <div className="d-flex align-items-center">
          <NavbarBrand className="text-light" href="#" onClick={(e) => this.handlePageChange(e, 'home')}>
            {"[ "}
            {"\u00A0"}nathan perfetti{"\u00A0"}
            {" ]"}
          </NavbarBrand>
          <div className="social-links ml-3">
            <a 
              href="https://github.com/perfettiful" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/nathanperfetti/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto d-flex align-items-center" navbar>
            <NavItem>
              <NavLink className="link" href="#" onClick={(e) => this.handlePageChange(e, 'resume')}>
                Resume
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                onClick={(e) => this.handleNavigateAndScroll(e, 'youtube-section')} 
                className="link" 
                href="#tutorials"
              >
                Tutorials
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                onClick={(e) => this.handleNavigateAndScroll(e, 'contact')} 
                className="link" 
                href="#contact"
              >
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
