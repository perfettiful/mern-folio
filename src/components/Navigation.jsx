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
import { Animated } from "react-animated-css";

class Navigation extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div className="sticky-top shadow">
        <Navbar color="light" dark fixed="fixed" expand="md">
          <Animated animationIn="slideInDown">
            <NavbarBrand className="text-light" href="#">
              {"[ "}
              {"\u00A0"}nathan perfetti{"\u00A0"}
              {" ]"}
            </NavbarBrand>
          </Animated>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.toggle} className="link" href="#about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={this.toggle}
                  className="link"
                  href="#portfolio"
                >
                  Portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle} className="link" href="#contact">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle} className="link" href="#resume">
                  Resume
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
