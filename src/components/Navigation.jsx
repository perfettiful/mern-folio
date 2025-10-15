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
  render() {
    return (
      <Navbar color="light" dark expand="md" className="fixed-top">
        <NavbarBrand className="text-light" href="#">
          {"[ "}
          {"\u00A0"}nathan perfetti{"\u00A0"}
          {" ]"}
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto d-flex align-items-center" navbar>
            <NavItem>
              <NavLink className="link" href="/Nathan-Perfetti-Resume-10-25.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                onClick={(e) => this.handleSmoothScroll(e, 'youtube-section')} 
                className="link" 
                href="#tutorials"
              >
                Tutorials
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                onClick={(e) => this.handleSmoothScroll(e, 'contact')} 
                className="link" 
                href="#contact"
              >
                Contact
              </NavLink>
            </NavItem>
            <div className="social-links">
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
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
