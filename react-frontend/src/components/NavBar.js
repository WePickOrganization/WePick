import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {withRouter} from 'react-router-dom'

class NavbarPage extends Component 
{
         
          constructor(props)
          {
              super(props);
                  
            

            this.state = {
              isOpen: false,
              email: this.props.email
            };
        }

        toggleCollapse = () => {
          this.setState({ isOpen: !this.state.isOpen });
        }

render() {
  return (
    <MDBNavbar color="default-color" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">WePick</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem active>
            <MDBNavLink to="/Home">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/Profile">Artist</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/Create">Generate</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className="d-none d-md-inline">About</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default" right>
                <MDBDropdownItem href="#!">What is WePick?</MDBDropdownItem>
                <MDBDropdownItem href="#!">How to use</MDBDropdownItem>
                <MDBDropdownItem href="#!">Common problems</MDBDropdownItem>
                <MDBDropdownItem href="https://github.com/WePickOrganization/WePick">GitHub</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
        <MDBNavItem>
            <MDBNavLink to="#/Create">{this.state.email}</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <MDBIcon icon="user" />
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default" right>
                <MDBDropdownItem href="#/Login">Account Login/Register</MDBDropdownItem>
                <MDBDropdownItem href="#/Create">Edit preferences</MDBDropdownItem>
                <MDBDropdownItem href="#/Logout">Logout</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    );
  }
}

export default withRouter(NavbarPage)